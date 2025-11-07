import { Injectable, Inject } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class AdvancedCacheService {
  constructor(@Inject('REDIS_CLIENT') private redisClient: Redis) {}

  // Multi-level caching with fallback
  async getWithFallback<T>(
    key: string,
    fallback: () => Promise<T>,
    ttl: number = 300, // 5 minutes default
    staleWhileRevalidate: number = 600 // 10 minutes
  ): Promise<T> {
    // Try to get from cache
    const cached = await this.redisClient.get(key);
    
    if (cached) {
      const data = JSON.parse(cached);
      
      // Check if data is stale but can be served while revalidating
      const cacheInfo = await this.redisClient.hget('cache_metadata', key);
      if (cacheInfo) {
        const { timestamp } = JSON.parse(cacheInfo);
        const age = Date.now() - timestamp;
        
        if (age > ttl * 1000 && age <= staleWhileRevalidate * 1000) {
          // Data is stale but within revalidation window
          // Serve stale data and revalidate in background
          this.revalidateInBackground(key, fallback, ttl);
        }
      }
      
      return data;
    }

    // Cache miss - get from fallback
    const freshData = await fallback();
    
    // Cache the data
    await this.set(key, freshData, ttl);
    
    return freshData;
  }

  private async revalidateInBackground(
    key: string,
    fallback: () => Promise<any>,
    ttl: number
  ): Promise<void> {
    // Revalidate in background without blocking
    setTimeout(async () => {
      try {
        const freshData = await fallback();
        await this.set(key, freshData, ttl);
      } catch (error) {
        console.error('Background revalidation failed:', error);
      }
    }, 0);
  }

  async set(key: string, data: any, ttl: number): Promise<void> {
    await this.redisClient.setex(key, ttl, JSON.stringify(data));
    
    // Store cache metadata
    const metadata = {
      timestamp: Date.now(),
      ttl,
      size: JSON.stringify(data).length,
    };
    await this.redisClient.hset('cache_metadata', key, JSON.stringify(metadata));
  }

  // Batch caching for multiple keys
  async mget<T>(keys: string[]): Promise<Map<string, T>> {
    if (keys.length === 0) return new Map();

    const values = await this.redisClient.mget(...keys);
    const result = new Map<string, T>();

    keys.forEach((key, index) => {
      if (values[index]) {
        result.set(key, JSON.parse(values[index]!));
      }
    });

    return result;
  }

  async mset(data: Map<string, any>, ttl: number): Promise<void> {
    if (data.size === 0) return;

    const pipeline = this.redisClient.pipeline();
    
    data.forEach((value, key) => {
      pipeline.setex(key, ttl, JSON.stringify(value));
    });

    await pipeline.exec();
  }

  // Cache warming for frequently accessed data
  async warmCache(patterns: string[], fallback: (pattern: string) => Promise<any[]>): Promise<void> {
    for (const pattern of patterns) {
      try {
        const data = await fallback(pattern);
        const cacheKey = `warm:${pattern}`;
        await this.set(cacheKey, data, 3600); // Cache for 1 hour
      } catch (error) {
        console.error(`Cache warming failed for pattern ${pattern}:`, error);
      }
    }
  }

  // Cache invalidation strategies
  async invalidatePattern(pattern: string): Promise<void> {
    const keys = await this.redisClient.keys(pattern);
    if (keys.length > 0) {
      await this.redisClient.del(...keys);
      
      // Also remove from metadata
      const metadataKeys = keys.map(key => `metadata:${key}`);
      await this.redisClient.hdel('cache_metadata', ...metadataKeys);
    }
  }

  async invalidateRelated(relatedKeys: string[]): Promise<void> {
    const pipeline = this.redisClient.pipeline();
    
    for (const key of relatedKeys) {
      pipeline.del(key);
      
      // Find and delete keys that start with this pattern
      const pattern = `${key}:*`;
      const related = await this.redisClient.keys(pattern);
      if (related.length > 0) {
        pipeline.del(...related);
      }
    }
    
    await pipeline.exec();
  }

  // Cache analytics
  async getCacheStats(): Promise<any> {
    const keys = await this.redisClient.keys('*');
    const metadata = await this.redisClient.hgetall('cache_metadata');
    
    let totalSize = 0;
    let hitCount = 0;
    let missCount = 0;

    for (const key in metadata) {
      const meta = JSON.parse(metadata[key]);
      totalSize += meta.size;
    }

    return {
      totalKeys: keys.length,
      totalSize: `${(totalSize / 1024 / 1024).toFixed(2)} MB`,
      hitRate: keys.length > 0 ? (hitCount / (hitCount + missCount)) * 100 : 0,
      averageTTL: this.calculateAverageTTL(metadata),
    };
  }

  private calculateAverageTTL(metadata: { [key: string]: string }): number {
    const ttls = Object.values(metadata).map(meta => 
      JSON.parse(meta).ttl
    );
    
    return ttls.length > 0 
      ? ttls.reduce((sum, ttl) => sum + ttl, 0) / ttls.length 
      : 0;
  }
}