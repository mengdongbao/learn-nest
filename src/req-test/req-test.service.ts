import { Injectable } from '@nestjs/common';

@Injectable()
export class ReqTestService {
  multi(a, b) {
    return a * b;
  }
}
