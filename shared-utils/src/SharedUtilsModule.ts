import { TestDebugger } from '../testing/TestDebugger';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: TestDebugger,
      useFactory: () => {
        const debugInstance = new TestDebugger({
          captureMemory: true,
          captureCallStack: true,
          captureEventLoop: false,
          samplingRate: 5000,
          maxSnapshots: 1000
        });
        debugInstance.start();
        return debugInstance;
      }
    }
  ],
  exports: [TestDebugger]
})
export class SharedUtilsModule {}