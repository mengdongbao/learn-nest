import { Controller, Get } from '@nestjs/common';

@Controller('middleware-test')
export class MiddlewareTestController {
    @Get()
    async get() {
        return {}
    }
}
