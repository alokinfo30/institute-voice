import { Test, TestingModule } from '@nestjs/testing';
import { SharedUtilsModule } from '../SharedUtilsModule';
import { TestDebugger } from '../testing/TestDebugger';

describe('TestDebugger', () => {
  let module: TestingModule;
  let debugInstance: TestDebugger;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [SharedUtilsModule],
    }).compile();

    debugInstance = module.get<TestDebugger>(TestDebugger);
  });

  afterEach(() => {
    debugInstance.stop();
  });

  it('should capture snapshots', () => {
    const scope = 'test';
    const data = { value: 42 };
    
    const snapshot = debugInstance.captureSnapshot(scope, data);
    
    expect(snapshot.scope).toBe(scope);
    expect(snapshot.data).toEqual(data);
    expect(snapshot.metadata.memory).toBeDefined();
    expect(snapshot.metadata.callStack).toBeDefined();
  });

  it('should filter snapshots by scope', () => {
    debugInstance.captureSnapshot('scope1', { a: 1 });
    debugInstance.captureSnapshot('scope2', { b: 2 });
    debugInstance.captureSnapshot('scope1', { c: 3 });

    const scope1Snapshots = debugInstance.getSnapshots({ scope: 'scope1' });
    expect(scope1Snapshots).toHaveLength(2);
    expect(scope1Snapshots[0].data).toEqual({ a: 1 });
    expect(scope1Snapshots[1].data).toEqual({ c: 3 });
  });

  it('should analyze snapshots', () => {
    debugInstance.captureSnapshot('test', { value: 1 });
    debugInstance.captureSnapshot('test', { value: 2 });
    
    const analysis = debugInstance.analyzeSnapshots();
    
    expect(analysis.memoryTrend).toBeDefined();
    expect(analysis.performanceMetrics).toBeDefined();
    expect(analysis.anomalies).toBeDefined();
  });

  it('should respect maxSnapshots limit', () => {
    const maxSnapshots = 2;
    const localDebugger = new TestDebugger({ maxSnapshots });

    localDebugger.captureSnapshot('test', { a: 1 });
    localDebugger.captureSnapshot('test', { b: 2 });
    localDebugger.captureSnapshot('test', { c: 3 });

    const snapshots = localDebugger.getSnapshots();
    expect(snapshots).toHaveLength(maxSnapshots);
    expect(snapshots[0].data).toEqual({ b: 2 });
    expect(snapshots[1].data).toEqual({ c: 3 });
  });

  it('should emit snapshot events', (done) => {
    debugInstance.on('snapshot', (snapshot) => {
      expect(snapshot.scope).toBe('test');
      expect(snapshot.data).toEqual({ value: 42 });
      done();
    });

    debugInstance.captureSnapshot('test', { value: 42 });
  });
});