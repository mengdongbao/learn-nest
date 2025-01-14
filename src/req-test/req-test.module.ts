import { Module } from '@nestjs/common';
import { ReqTestController } from './req-test.controller';

@Module({
  controllers: [ReqTestController],
})
export class ReqTestModule {}
