import { Injectable } from '@nestjs/common';

@Injectable()
export class ResTestService {
  add(a, b) {
    return a + b;
  }
}
