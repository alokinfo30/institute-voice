import { CacheService } from '../CacheService';
import { TestDebugger } from '../../../../shared-utils/src/testing/TestDebugger';

// Minimal in-memory FakeRedis to test CacheService behaviour without external Redis
class FakeRedis {
  private store = new Map<string, string>();

  async get(key: string) {
    return this.store.get(key) ?? null;
  }

  async setex(key: string, ttl: number, value: string) {
    // ignore ttl for tests
    this.store.set(key, value);
    return 'OK';
  }

  async mget(keys: string[]) {
    return keys.map(k => this.store.get(k) ?? null);
  }

  pipeline() {
    const commands: Array<() => void> = [];
    return {
      setex: (key: string, ttl: number, value: string) => {
        commands.push(() => this.store.set(key, value));
      },
      exec: async () => {
        commands.forEach(fn => fn());
        return [];
      }
    };
  }

  async del(keys: string | string[]) {
    if (Array.isArray(keys)) {
      keys.forEach(k => this.store.delete(k));
    } else {
      this.store.delete(keys);
    }
    return 1;
  }

  async exists(key: string) {
    return this.store.has(key) ? 1 : 0;
  }

  async keys(pattern: string) {
    // very naive pattern supporting '*' only
    if (pattern === '*') return Array.from(this.store.keys());
    if (pattern.endsWith('*')) {
      const prefix = pattern.slice(0, -1);
      return Array.from(this.store.keys()).filter(k => k.startsWith(prefix));
    }
    return [];
  }

  async hget(hash: string, field: string) {
    const compound = `${hash}:${field}`;
    return this.store.get(compound) ?? null;
  }

  async hset(hash: string, field: string, value: string) {
    const compound = `${hash}:${field}`;
    this.store.set(compound, value);
    return 1;
  }

  async hgetall(hash: string) {
    const result: Record<string, string> = {};
    for (const [k, v] of this.store.entries()) {
      if (k.startsWith(hash + ':')) {
        const field = k.slice(hash.length + 1);
        result[field] = v;
      }
    }
    return result;
  }

  async info(section?: string) {
    // return minimalistic info strings
    if (section === 'memory') {
      return 'used_memory:1024\nused_memory_peak:2048';
    }
    if (section === 'stats') {
      return 'keyspace_hits:10\nkeyspace_misses:5\ntotal_commands_processed:100\ninstantaneous_ops_per_sec:2';
    }
    return 'db0:keys=3,expires=1';
  }
}

describe('CacheService (instrumented)', () => {
  it('should set and get values and emit debug snapshots', async () => {
    const fakeRedis = new FakeRedis() as any;
    const debuggerInstance = new TestDebugger({ captureCallStack: false, captureMemory: false });

    const snapshots: any[] = [];
    debuggerInstance.on('snapshot', (s) => snapshots.push(s));

    const cache = new CacheService({ redisUrl: 'redis://localhost' } as any, debuggerInstance, fakeRedis);

    await cache.set('foo', { a: 1 }, 60);
    const v = await cache.get<{ a: number }>('foo');

    expect(v).toBeTruthy();
    expect(v!.a).toBe(1);

    // check that debug snapshots were captured for set and get
    const types = snapshots.map(s => s.scope);
    expect(types).toContain('cache.set');
    expect(types).toContain('cache.get');
  });

  it('getOrSet should fetch when missing and cache result', async () => {
    const fakeRedis = new FakeRedis() as any;
    const debuggerInstance = new TestDebugger({ captureCallStack: false, captureMemory: false });
    const cache = new CacheService({ redisUrl: 'redis://localhost' } as any, debuggerInstance, fakeRedis);

    const fetcher = async () => ({ name: 'generated' });
    const res = await cache.getOrSet('auto:key', fetcher, 30);
    expect(res.name).toBe('generated');

    // second call should hit cache
    const res2 = await cache.getOrSet('auto:key', async () => ({ name: 'other' }), 30);
    expect(res2.name).toBe('generated');
  });
});
