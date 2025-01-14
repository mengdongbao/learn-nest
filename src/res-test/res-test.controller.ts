import { Controller, Get, Post, Put, Response } from '@nestjs/common';
import { Response as ExpRes } from 'express';
import {
  Body,
  Header,
  Headers,
  Param,
  Query,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';

@Controller('res-test')
export class ResTestController {
  @Get()
  async get(@Response() res: ExpRes) {
    console.log(res);
    res.setHeader('Content-Type', 'text/plain');
    res.json({});
  }

  @Post()
  async post(@Response() res: ExpRes) {
    res.download('C:/Users/BAOME/Desktop/tmp/main.rest', 'hello.rest');
  }

  @Put()
  async put(@Response() res: ExpRes) {
    let body: string = '';
    const boundary = 'hello';
    res.setHeader('Content-Type', `multipart/form-data; boundary=${boundary}`);
    body += `--${boundary}\n`;
    body += "Content-Disposition: form-data; name='name'\n";
    body += 'zhangsan\n';
    body += `\n--${boundary}--\n`;
    res.write(body);
    res.end();
  }
}
