# Advanced Debugging System

This directory contains the advanced debugging and testing infrastructure for the project.

## Components

### 1. TestDebugger

The `TestDebugger` class (`testing/TestDebugger.ts`) provides comprehensive debugging capabilities:

- Memory tracking
- Call stack capture
- Event loop metrics
- Periodic sampling
- Snapshot export/analysis
- Anomaly detection

```typescript
import { TestDebugger } from '@project/shared-utils';

const debugger = new TestDebugger({
  captureMemory: true,
  captureCallStack: true,
  captureEventLoop: false,
  samplingRate: 5000,
  maxSnapshots: 1000
});

// Start periodic sampling
debugger.start();

// Capture manual snapshot
debugger.captureSnapshot('cache.get', { 
  key: 'user:123',
  hit: true,
  duration: 5
});

// Get filtered snapshots
const cacheSnapshots = debugger.getSnapshots({ scope: 'cache' });

// Analyze snapshots
const analysis = debugger.analyzeSnapshots();
console.log(analysis.memoryTrend);
console.log(analysis.performanceMetrics);
console.log(analysis.anomalies);
```

### 2. Debug HTTP Endpoints

The API Gateway exposes debug endpoints at `/_debug/*`:

- `GET /_debug/snapshots`: Get all debug snapshots
- `GET /_debug/snapshots/cache`: Get cache-related snapshots
- `GET /_debug/snapshots/stats`: Get snapshot statistics

### 3. Debug UI Component

The `DebugView` component (`shared-components/src/components/debug/DebugView.tsx`) provides a real-time visualization of debug data:

```tsx
import { DebugView } from '@project/shared-components';

function App() {
  return (
    <DebugView 
      apiEndpoint="http://localhost:3000/_debug"
      refreshInterval={5000}
    />
  );
}
```

Features:
- Memory usage charts
- Operation timing stats
- Scope filtering
- Call stack inspection
- Anomaly highlighting

## Usage Examples

### 1. Instrumenting a Service

```typescript
import { TestDebugger } from '@project/shared-utils';

@Injectable()
export class CacheService {
  constructor(private debugger: TestDebugger) {}

  async get(key: string) {
    const start = Date.now();
    const result = await this.redis.get(key);
    
    this.debugger.captureSnapshot('cache.get', {
      key,
      hit: !!result,
      duration: Date.now() - start
    });
    
    return result;
  }
}
```

### 2. Monitoring in Development

1. Start the API Gateway with debug endpoints enabled
2. Open the debug UI at `http://localhost:3000/debug`
3. Filter by scope (e.g., 'cache', 'auth', etc.)
4. Watch real-time memory and performance metrics
5. Inspect anomalies and slow operations

### 3. Debugging Performance Issues

1. Enable periodic sampling:
   ```typescript
   debugger.start(); // Captures snapshots every 5s
   ```

2. Generate load on the system
3. Check the debug UI for:
   - Memory leaks (growing heap)
   - Slow operations (high duration)
   - Anomalies (unusual patterns)
   - Call stacks of problematic operations

## Best Practices

1. **Scope Naming**:
   - Use dot notation: `service.operation`
   - Examples: `cache.get`, `auth.validate`, `db.query`

2. **Snapshot Data**:
   - Include operation duration
   - Add context (keys, sizes, counts)
   - Mark success/failure
   - Note: Large payloads are truncated

3. **Memory Management**:
   - Set appropriate `maxSnapshots`
   - Clean up debugger when done
   - Use `debugger.clear()` to reset

4. **Production Use**:
   - Disable call stack capture
   - Increase sampling interval
   - Implement data retention policies
   - Control access to debug endpoints

## Extending

### Adding New Metrics

1. Extend `DebugSnapshot` interface:
   ```typescript
   interface DebugSnapshot {
     // ... existing fields
     customMetrics?: {
       queueSize?: number;
       workerUtilization?: number;
     };
   }
   ```

2. Update analysis:
   ```typescript
   analyzeSnapshots() {
     // ... existing analysis
     const customMetrics = this.analyzeCustomMetrics();
     return { ...analysis, customMetrics };
   }
   ```

### Adding UI Features

1. Add new chart/visualization:
   ```tsx
   <DebugChart>
     <ResponsiveContainer>
       <YourCustomChart data={processedData} />
     </ResponsiveContainer>
   </DebugChart>
   ```

2. Add new controls/filters:
   ```tsx
   <DebugControls>
     <YourCustomFilter
       value={filterValue}
       onChange={handleFilterChange}
     />
   </DebugControls>
   ```

## Contributing

1. Follow naming conventions
2. Add tests for new features
3. Update documentation
4. Consider performance impact