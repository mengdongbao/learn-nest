import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MiddlewareTestController } from './middleware-test.controller';
import { LoggerMiddleware } from './middleware-test.middleware';

@Module({
  controllers: [MiddlewareTestController],
  providers: [LoggerMiddleware]
})
export class MiddlewareTestModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddleware)
        .forRoutes(MiddlewareTestController)

    }
    
}
