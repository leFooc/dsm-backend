import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonsService } from 'libs/common/src';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commonsService: CommonsService
  ) {}

  @Get()
  getHello(): string {
    return this.commonsService.hello();
  }
}
