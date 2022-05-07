import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRndHighlights(@Query() query) {
    const numberOfHighlights = query.noh as number | undefined;
    return await this.appService.getRndHighlights(numberOfHighlights);
  }
}
