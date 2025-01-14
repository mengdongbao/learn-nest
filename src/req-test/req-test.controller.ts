import { Body, Controller, Get, Header, Headers, Param, Post, Put, Query, Req, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';
import { type Request } from 'express';

@Controller('req-test')
export class ReqTestController {
    @Get('/:id/:name')
    async getAll(@Param() params, @Query('name') name, @Headers() headers) {
        console.log(headers);
        return {
            data: [
                {name: 'zhangsan'},
                {name: 'lisi'}
            ]
        }
    }

    @Post()
    async create(@Body() body, @Req() req: Request) {
        console.log(req.query);
        return {}
    }

    @Put()
    @UseInterceptors(AnyFilesInterceptor())
    async modify(@UploadedFiles() files: Express.Multer.File[]) {
        console.log(files);
        return {}
    }
}
