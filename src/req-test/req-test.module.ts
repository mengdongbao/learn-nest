import { Module } from '@nestjs/common';
import { ReqTestController } from './req-test.controller';
import { ReqTestService } from './req-test.service';

@Module({
  controllers: [ReqTestController],
  providers: [ReqTestService],
  exports: [ReqTestService],
})
export class ReqTestModule {}
