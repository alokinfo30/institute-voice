import { Module } from '@nestjs/common';
import { TestDebugger } from '../../../../shared-utils/src/testing/TestDebugger';
import { DebugController } from './debug.controller';

@Module({
  controllers: [DebugController],
  providers: [
    {
      provide: TestDebugger,
      useFactory: () => {
        const debugInstance = new TestDebugger({
          captureMemory: true,
          captureCallStack: true,
          captureEventLoop: false,
          samplingRate: 5000, // 5 second intervals
          maxSnapshots: 1000
        });
        debugInstance.start();
        return debugInstance;
      }
    }
  ],
  exports: [TestDebugger]
})
export class DebugModule {}