import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Response,
} from '@nestjs/common';
import { Response as ExpRes } from 'express';
import { ResTestService } from './res-test.service';
import { ReqTestService } from 'src/req-test/req-test.service';

@Controller('res-test')
export class ResTestController {
  constructor(
    private ins: ResTestService,
    private reqIns: ReqTestService,
  ) {}

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

  @Delete()
  async del(@Query() obj) {
    const result = this.ins.add(Number(obj.a), Number(obj.b));
    const multiResult = this.reqIns.multi(Number(obj.a), Number(obj.b));
    return {
      result,
      multiResult,
    };
  }
}
