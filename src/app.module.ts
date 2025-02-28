import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReqTestModule } from './req-test/req-test.module';
import { ResTestModule } from './res-test/res-test.module';
import { MiddlewareTestModule } from './middleware-test/middleware-test.module';

@Module({
  imports: [ReqTestModule, ResTestModule, MiddlewareTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
