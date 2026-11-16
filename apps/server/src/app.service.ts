import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(port: number): string {
    return `Server is running on port ${port}`;
  }
}
