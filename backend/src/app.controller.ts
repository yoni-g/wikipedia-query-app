import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): { message: string } {
    return { message: this.appService.getHello() };
  }

  @Get('test')
  getTest(): { status: string, timestamp: number } {
    return {
      status: 'API is working!',
      timestamp: Date.now()
    };
  }
}