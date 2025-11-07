import { TestRunner, TestResult, Test } from './TestRunner';

export interface BenchmarkResult extends TestResult {
  operations: number;
  opsPerSecond: number;
  meanLatency: number;
  p95Latency: number;
  p99Latency: number;
}

export interface BenchmarkOptions {
  duration?: number;
  iterations?: number;
  warmupIterations?: number;
  concurrent?: number;
  maxConcurrency?: number;
}

export class BenchmarkRunner extends TestRunner {
  private defaultOptions: Required<BenchmarkOptions> = {
    duration: 5000,
    iterations: 1000,
    warmupIterations: 100,
    concurrent: 1,
    maxConcurrency: 100
  };

  public async benchmark(
    name: string,
    fn: () => Promise<void>,
    options?: BenchmarkOptions
  ): Promise<BenchmarkResult> {
    const opts = { ...this.defaultOptions, ...options };
    const latencies: number[] = [];
    const startTime = Date.now();
    let operations = 0;

    // Warmup phase
    for (let i = 0; i < opts.warmupIterations; i++) {
      await fn();
    }

    // Main benchmark phase
    const promises: Promise<void>[] = [];
    const endTime = startTime + opts.duration;

    while (Date.now() < endTime && operations < opts.iterations) {
      if (promises.length >= opts.concurrent) {
        await Promise.race(promises);
        promises.splice(0, promises.length - opts.concurrent + 1);
      }

      const opStartTime = process.hrtime.bigint();
      promises.push(
        fn().then(() => {
          const opEndTime = process.hrtime.bigint();
          const latency = Number(opEndTime - opStartTime) / 1_000_000; // Convert to milliseconds
          latencies.push(latency);
          operations++;
        })
      );
    }

    await Promise.all(promises);

    // Calculate statistics
    latencies.sort((a, b) => a - b);
    const duration = Date.now() - startTime;
    const opsPerSecond = (operations / duration) * 1000;
    const meanLatency = latencies.reduce((a, b) => a + b, 0) / latencies.length;
    const p95Index = Math.floor(latencies.length * 0.95);
    const p99Index = Math.floor(latencies.length * 0.99);

    const result: BenchmarkResult = {
      testName: name,
    status: 'passed',
      duration,
      operations,
      opsPerSecond,
      meanLatency,
      p95Latency: latencies[p95Index],
      p99Latency: latencies[p99Index]
    };

    return result;
  }

  public async runConcurrencyTest(
    name: string,
    fn: () => Promise<void>,
    options?: { maxConcurrency?: number; duration?: number }
  ): Promise<BenchmarkResult[]> {
    const opts = {
      maxConcurrency: options?.maxConcurrency || this.defaultOptions.maxConcurrency,
      duration: options?.duration || this.defaultOptions.duration
    };

    const results: BenchmarkResult[] = [];
    let concurrency = 1;

    while (concurrency <= opts.maxConcurrency) {
      const result = await this.benchmark(
        `${name} (${concurrency} concurrent)`,
        fn,
        {
          concurrent: concurrency,
          duration: opts.duration
        }
      );
      results.push(result);
      concurrency *= 2;
    }

    return results;
  }

  public async runLoadTest(
    name: string,
    fn: () => Promise<void>,
    options?: {
      rampUpTime?: number;
      peakLoad?: number;
      duration?: number;
      stepDuration?: number;
    }
  ): Promise<BenchmarkResult[]> {
    const opts = {
      rampUpTime: options?.rampUpTime || 30000,
      peakLoad: options?.peakLoad || 100,
      duration: options?.duration || 300000,
      stepDuration: options?.stepDuration || 5000
    };

    const results: BenchmarkResult[] = [];
    const startTime = Date.now();
    const endTime = startTime + opts.duration;
    let currentLoad = 1;

    while (Date.now() < endTime) {
      const progress = (Date.now() - startTime) / opts.rampUpTime;
      currentLoad = Math.min(opts.peakLoad, Math.floor(progress * opts.peakLoad));

      if (currentLoad > 0) {
        const result = await this.benchmark(
          `${name} (${currentLoad} RPS)`,
          fn,
          {
            concurrent: currentLoad,
            duration: opts.stepDuration
          }
        );
        results.push(result);
      }

      if (currentLoad >= opts.peakLoad) {
        break;
      }
    }

    return results;
  }

  private calculatePercentile(sortedLatencies: number[], percentile: number): number {
    const index = Math.floor(sortedLatencies.length * percentile);
    return sortedLatencies[index];
  }
}

export class BenchmarkReporter {
  constructor(private results: BenchmarkResult[]) {}

  public printSummary() {
    console.log('\n📊 Benchmark Summary:');
    console.log('='.repeat(80));

    this.results.forEach(result => {
      console.log(`\n🔬 Test: ${result.testName}`);
      console.log('-'.repeat(80));
      console.log(`Operations: ${result.operations}`);
      console.log(`Operations/sec: ${result.opsPerSecond.toFixed(2)}`);
      console.log(`Mean Latency: ${result.meanLatency.toFixed(2)}ms`);
      console.log(`P95 Latency: ${result.p95Latency.toFixed(2)}ms`);
      console.log(`P99 Latency: ${result.p99Latency.toFixed(2)}ms`);
      console.log(`Duration: ${result.duration}ms`);
    });
  }

  public generateCsv(): string {
    const headers = [
      'Test Name',
      'Operations',
      'Operations/sec',
      'Mean Latency (ms)',
      'P95 Latency (ms)',
      'P99 Latency (ms)',
      'Duration (ms)'
    ];

    const rows = this.results.map(result => [
      result.testName,
      result.operations,
      result.opsPerSecond.toFixed(2),
      result.meanLatency.toFixed(2),
      result.p95Latency.toFixed(2),
      result.p99Latency.toFixed(2),
      result.duration
    ]);

    return [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
  }

  public generateChartData() {
    return {
      labels: this.results.map(r => r.testName),
      datasets: [
        {
          label: 'Operations/sec',
          data: this.results.map(r => r.opsPerSecond)
        },
        {
          label: 'Mean Latency (ms)',
          data: this.results.map(r => r.meanLatency)
        },
        {
          label: 'P95 Latency (ms)',
          data: this.results.map(r => r.p95Latency)
        }
      ]
    };
  }
}