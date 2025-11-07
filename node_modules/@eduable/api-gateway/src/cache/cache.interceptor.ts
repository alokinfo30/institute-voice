import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RedisService } from './redis.service';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private redisService: RedisService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const cacheKey = this.generateCacheKey(request);

    // Check cache first
    const cached = await this.redisService.get(cacheKey);
    if (cached) {
      return of(cached);
    }

    // If not cached, handle request and cache response
    return next.handle().pipe(
      tap(async data => {
        // Cache for 5 minutes
        await this.redisService.set(cacheKey, data, 300);
      })
    );
  }

  private generateCacheKey(request: any): string {
    const { method, url, query, body, user } = request;
    const keyParts = [
      method,
      url,
      JSON.stringify(query),
      JSON.stringify(body),
      user?.id || 'anonymous',
    ];
    return `cache:${Buffer.from(keyParts.join('|')).toString('base64')}`;
  }
}