import { Module } from '@nestjs/common';
import { ResTestController } from './res-test.controller';
import { ResTestService } from './res-test.service';
import { ReqTestModule } from 'src/req-test/req-test.module';

@Module({
  controllers: [ResTestController],
  providers: [ResTestService],
  imports: [ReqTestModule],
})
export class ResTestModule {}
