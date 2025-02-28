import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response } from 'express';
import { IsString, IsIn, IsInt, validate, IsNotEmpty } from 'class-validator';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const token = req.header('token');
    if (token) {
      console.log(`中间件生效(token: ${req.header('token')})`);
      const obj = new Form({
        planCode: '',
        planName: '222',
        status: 1.1,
      });
      validate(obj).then(res => {
        console.log(res);
      })
      next();
    } else {
      res.sendStatus(401);
    }
  }
}

interface IForm {
  planCode: string;
  planName: string;
  status: number;
}

class Form implements IForm {
  @IsString({ message: '必须是字符串' })
  @IsNotEmpty()
  public planCode: string;
  @IsString()
  @IsNotEmpty()
  public planName: string;
  @IsIn([0, 1, 2], { message: '不在指定的作用域内' })
  @IsInt({ message: '必须是整数' })
  public status: number;
  constructor(opt: IForm) {
    this.planCode = opt.planCode;
    this.planName = opt.planName;
    this.status = opt.status;
  }
}
