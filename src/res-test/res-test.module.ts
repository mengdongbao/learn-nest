import { Module } from '@nestjs/common';
import { ResTestController } from './res-test.controller';

@Module({
  controllers: [ResTestController],
})
export class ResTestModule {}
