import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const PORT: number = typeof process.env.PORT === 'number' ? process.env.PORT : 5000; // ajari logic to handle the PORT environment variable correctly
    return this.appService.getHello(PORT);
  }
}
