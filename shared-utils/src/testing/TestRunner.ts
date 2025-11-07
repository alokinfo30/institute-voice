import { EventEmitter } from 'events';

export interface TestResult {
  testName: string;
  status: 'passed' | 'failed' | 'skipped' | 'running';
  duration: number;
  error?: Error;
  context?: Record<string, any>;
  memoryUsage?: number;
  cpuUsage?: number;
}

export interface TestSuite {
  name: string;
  tests: Test[];
  beforeAll?: () => Promise<void>;
  afterAll?: () => Promise<void>;
  beforeEach?: () => Promise<void>;
  afterEach?: () => Promise<void>;
}

export interface Test {
  name: string;
  fn: () => Promise<void>;
  timeout?: number;
  retries?: number;
  tags?: string[];
}

export class TestRunner extends EventEmitter {
  private suites: TestSuite[] = [];
  private currentSuite?: TestSuite;
  private results: TestResult[] = [];

  constructor() {
    super();
    this.setupGlobalHandlers();
  }

  private setupGlobalHandlers() {
    process.on('unhandledRejection', (reason, promise) => {
      this.emit('error', {
        type: 'unhandledRejection',
        reason,
        promise,
        suite: this.currentSuite?.name
      });
    });

    process.on('uncaughtException', (error) => {
      this.emit('error', {
        type: 'uncaughtException',
        error,
        suite: this.currentSuite?.name
      });
    });
  }

  public describeSuite(name: string, suiteConfig: Omit<TestSuite, 'name'>) {
    this.suites.push({
      name,
      ...suiteConfig
    });
  }

  public async runAll(options?: {
    filter?: string;
    tags?: string[];
    parallel?: boolean;
    timeout?: number;
  }) {
    const startTime = Date.now();

    for (const suite of this.suites) {
      if (options?.filter && !suite.name.includes(options.filter)) {
        continue;
      }

      this.currentSuite = suite;
      this.emit('suiteStart', suite.name);

      try {
        await this.runSuite(suite, options);
      } catch (error) {
        this.emit('suiteError', { suite: suite.name, error });
      }

      this.emit('suiteEnd', suite.name);
    }

    const endTime = Date.now();
    this.emit('complete', {
      duration: endTime - startTime,
      results: this.results
    });

    return this.results;
  }

  private async runSuite(suite: TestSuite, options?: { tags?: string[]; timeout?: number }) {
    try {
      await suite.beforeAll?.();

      const eligibleTests = suite.tests.filter(test => {
      const failed = results.filter((r: TestResult) => r.status === 'failed').length;
        return test.tags?.some(tag => options.tags?.includes(tag));
      });

      for (const test of eligibleTests) {
        await this.runTest(suite, test, options?.timeout);
      }
    } finally {
      await suite.afterAll?.();
    }
  }

  private async runTest(suite: TestSuite, test: Test, globalTimeout?: number) {
    const result: TestResult = {
      testName: `${suite.name} - ${test.name}`,
      status: 'running',
      duration: 0
    };

    this.emit('testStart', result);

    const startTime = Date.now();
    const startMemory = process.memoryUsage().heapUsed;
    const startCpu = process.cpuUsage();

    try {
      await suite.beforeEach?.();
      await this.executeTest(test, globalTimeout);
      result.status = 'passed';
    } catch (error) {
      result.status = 'failed';
      result.error = error as Error;
    } finally {
      await suite.afterEach?.();
    }

    const endTime = Date.now();
    const endMemory = process.memoryUsage().heapUsed;
    const endCpu = process.cpuUsage(startCpu);

    result.duration = endTime - startTime;
    result.memoryUsage = endMemory - startMemory;
    result.cpuUsage = endCpu.user + endCpu.system;

    this.results.push(result);
    this.emit('testEnd', result);
  }

  private async executeTest(test: Test, globalTimeout?: number) {
    const timeout = test.timeout || globalTimeout || 5000;
    let attempts = 0;
    const maxAttempts = test.retries ? test.retries + 1 : 1;

    while (attempts < maxAttempts) {
      try {
        await Promise.race([
          test.fn(),
          new Promise((_, reject) => {
            setTimeout(() => {
              reject(new Error(`Test timed out after ${timeout}ms`));
            }, timeout);
          })
        ]);
        return;
      } catch (error) {
        attempts++;
        if (attempts === maxAttempts) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
}

export class TestReporter {
  constructor(private runner: TestRunner) {
    this.setupListeners();
  }

  private setupListeners() {
    this.runner.on('suiteStart', (suiteName) => {
      console.log(`\n🏃 Running suite: ${suiteName}`);
    });

    this.runner.on('testStart', (result) => {
      process.stdout.write(`  ⏳ ${result.testName}`);
    });

    this.runner.on('testEnd', (result) => {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      const icon = result.status === 'passed' ? '✅' : '❌';
      console.log(`  ${icon} ${result.testName} (${result.duration}ms)`);
      
      if (result.status === 'failed' && result.error) {
        console.log('    Error:', result.error.message);
        console.log('    Stack:', result.error.stack);
      }
    });

    this.runner.on('suiteEnd', (suiteName) => {
      console.log(`\n✨ Completed suite: ${suiteName}`);
    });

    this.runner.on('complete', ({ duration, results }) => {
      const total = results.length;
      const passed = results.filter(r => r.status === 'passed').length;
      const failed = results.filter(r => r.status === 'failed').length;

      console.log('\n📊 Test Summary:');
      console.log(`Total: ${total}`);
      console.log(`Passed: ${passed}`);
      console.log(`Failed: ${failed}`);
      console.log(`Duration: ${duration}ms`);
    });

    this.runner.on('error', (error) => {
      console.error('\n🚨 Unhandled error:', error);
    });
  }
}