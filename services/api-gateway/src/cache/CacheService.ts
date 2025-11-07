import { Redis } from 'ioredis';
import { CacheConfig } from '../types';
import { TestDebugger } from '../../../../shared-utils/src/testing/TestDebugger';

// Local lightweight types for cache statistics (keeps this file self-contained)
interface MemoryStats {
  used: number;
  peak: number;
  usagePercent: number;
}

interface KeyspaceStats {
  totalKeys: number;
  expiringKeys: number;
}

interface OperationStats {
  totalCommands: number;
  opsPerSecond: number;
}

interface CacheStats {
  memoryUsage: MemoryStats;
  hitRate: number;
  keyspace: KeyspaceStats;
  operations: OperationStats;
}

export class CacheService {
  private redis: Redis;
  private defaultTTL: number;
  private debugger?: TestDebugger;

  constructor(config: CacheConfig, debuggerInstance?: TestDebugger, redisInstance?: Redis) {
    if (redisInstance) {
      this.redis = redisInstance;
    } else {
      this.redis = new Redis(config.redisUrl, {
        retryStrategy: (times) => {
          const delay = Math.min(times * 50, 2000);
          return delay;
        },
        maxRetriesPerRequest: 3,
      });

      this.initializeCache();
    }

    this.defaultTTL = config.defaultTTL || 3600; // 1 hour default
    this.debugger = debuggerInstance;
  }

  private captureDebug(scope: string, data: any = {}) {
    try {
      this.debugger?.captureSnapshot(scope, data);
    } catch (e) {
      // swallow debugger errors to avoid affecting cache behavior
      // eslint-disable-next-line no-console
      console.debug('Debugger capture failed', e);
    }
  }

  private async initializeCache() {
    await this.redis.config('SET', 'maxmemory', '2gb');
    await this.redis.config('SET', 'maxmemory-policy', 'allkeys-lru');
  }

  async get<T>(key: string): Promise<T | null> {
    const start = Date.now();
    const data = await this.redis.get(key);
    const duration = Date.now() - start;
    const result = data ? JSON.parse(data) : null;
    this.captureDebug('cache.get', { key, hit: !!data, duration });
    return result;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const start = Date.now();
    const serializedValue = JSON.stringify(value);
    if (ttl) {
      await this.redis.setex(key, ttl, serializedValue);
    } else {
      await this.redis.setex(key, this.defaultTTL, serializedValue);
    }
    const duration = Date.now() - start;
    this.captureDebug('cache.set', { key, ttl: ttl ?? this.defaultTTL, duration });
  }

  async mget<T>(keys: string[]): Promise<(T | null)[]> {
    const start = Date.now();
    const values = await this.redis.mget(keys);
    const duration = Date.now() - start;
    const result = values.map(v => v ? JSON.parse(v) : null);
    this.captureDebug('cache.mget', { keysCount: keys.length, duration });
    return result;
  }

  async mset(keyValuePairs: { key: string; value: any; ttl?: number }[]): Promise<void> {
    const pipeline = this.redis.pipeline();
    const start = Date.now();

    keyValuePairs.forEach(({ key, value, ttl }) => {
      const serializedValue = JSON.stringify(value);
      if (ttl) {
        pipeline.setex(key, ttl, serializedValue);
      } else {
        pipeline.setex(key, this.defaultTTL, serializedValue);
      }
    });

    await pipeline.exec();
    const duration = Date.now() - start;
    this.captureDebug('cache.mset', { items: keyValuePairs.length, duration });
  }

  async del(key: string): Promise<void> {
    const start = Date.now();
    await this.redis.del(key);
    const duration = Date.now() - start;
    this.captureDebug('cache.del', { key, duration });
  }

  async mdel(keys: string[]): Promise<void> {
    if (keys.length > 0) {
      const start = Date.now();
      await this.redis.del(keys);
      const duration = Date.now() - start;
      this.captureDebug('cache.mdel', { keysCount: keys.length, duration });
    }
  }

  // Advanced Caching Methods

  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    const start = Date.now();
    const cached = await this.get<T>(key);
    if (cached) {
      this.captureDebug('cache.getOrSet', { key, hit: true, duration: Date.now() - start });
      return cached;
    }

    const fresh = await fetcher();
    await this.set(key, fresh, ttl);
    this.captureDebug('cache.getOrSet', { key, hit: false, duration: Date.now() - start });
    return fresh;
  }

  async hashGet<T>(hash: string, field: string): Promise<T | null> {
    const value = await this.redis.hget(hash, field);
    return value ? JSON.parse(value) : null;
  }

  async hashSet(hash: string, field: string, value: any): Promise<void> {
    await this.redis.hset(hash, field, JSON.stringify(value));
  }

  async hashGetAll<T>(hash: string): Promise<Record<string, T>> {
    const data = await this.redis.hgetall(hash);
    const result: Record<string, T> = {};
    
    for (const [key, value] of Object.entries(data)) {
      result[key] = JSON.parse(value as string);
    }
    
    return result;
  }

  // Cache Pattern Methods

  async cachePattern(
    pattern: string,
    fetcher: () => Promise<Record<string, any>>,
    ttl?: number
  ): Promise<Record<string, any>> {
    const start = Date.now();
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      const cached = await this.mget(keys);
      const result: Record<string, any> = {};
      keys.forEach((key, index) => {
        result[key] = cached[index];
      });
      this.captureDebug('cache.cachePattern', { pattern, keysCount: keys.length, duration: Date.now() - start });
      return result;
    }

    const fresh = await fetcher();
    await this.mset(
      Object.entries(fresh).map(([key, value]) => ({
        key,
        value,
        ttl
      }))
    );
    this.captureDebug('cache.cachePattern', { pattern, keysCount: Object.keys(fresh).length, duration: Date.now() - start });
    return fresh;
  }

  // Cache Tags

  async tagKeys(tag: string, keys: string[]): Promise<void> {
    await this.redis.sadd(`tag:${tag}`, keys);
  }

  async invalidateTag(tag: string): Promise<void> {
    const keys = await this.redis.smembers(`tag:${tag}`);
    if (keys.length > 0) {
      await this.mdel(keys);
      await this.redis.del(`tag:${tag}`);
    }
  }

  // Cache Warmup

  async warmup(keys: Array<{ key: string; fetcher: () => Promise<any> }>): Promise<void> {
    const start = Date.now();
    const pipeline = this.redis.pipeline();

    for (const { key, fetcher } of keys) {
      const exists = await this.redis.exists(key);
      if (!exists) {
        const value = await fetcher();
        pipeline.setex(key, this.defaultTTL, JSON.stringify(value));
      }
    }

    await pipeline.exec();
    this.captureDebug('cache.warmup', { items: keys.length, duration: Date.now() - start });
  }

  // Cache Statistics

  async getStats(): Promise<CacheStats> {
    const start = Date.now();
    const info = await this.redis.info();
    const memory = await this.redis.info('memory');
    const stats = await this.redis.info('stats');

    const result = {
      memoryUsage: this.parseMemoryInfo(memory),
      hitRate: this.parseHitRate(stats),
      keyspace: this.parseKeyspaceInfo(info),
      operations: this.parseOperationStats(stats)
    };

    this.captureDebug('cache.getStats', { duration: Date.now() - start, summary: { hitRate: result.hitRate } });
    return result;
  }

  private parseMemoryInfo(info: string): MemoryStats {
    // Parse Redis INFO memory section
    const used = parseInt(info.match(/used_memory:(\d+)/)?.[1] || '0');
    const peak = parseInt(info.match(/used_memory_peak:(\d+)/)?.[1] || '0');
    
    return {
      used,
      peak,
      usagePercent: (used / peak) * 100
    };
  }

  private parseHitRate(stats: string): number {
    const hits = parseInt(stats.match(/keyspace_hits:(\d+)/)?.[1] || '0');
    const misses = parseInt(stats.match(/keyspace_misses:(\d+)/)?.[1] || '0');
    
    return hits / (hits + misses) * 100;
  }

  private parseKeyspaceInfo(info: string): KeyspaceStats {
    // Parse Redis INFO keyspace section
    const match = info.match(/db0:keys=(\d+),expires=(\d+)/);
    
    return {
      totalKeys: parseInt(match?.[1] || '0'),
      expiringKeys: parseInt(match?.[2] || '0')
    };
  }

  private parseOperationStats(stats: string): OperationStats {
    return {
      totalCommands: parseInt(stats.match(/total_commands_processed:(\d+)/)?.[1] || '0'),
      opsPerSecond: parseInt(stats.match(/instantaneous_ops_per_sec:(\d+)/)?.[1] || '0')
    };
  }
}