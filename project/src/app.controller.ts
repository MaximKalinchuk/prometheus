import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('local')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('base')
  getHello(): string {
    return this.appService.getHello();
  }
}
