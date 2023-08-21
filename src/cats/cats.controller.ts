import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(420)
  create(): string {
    return 'create new deshi cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return `deshi cats ${request}`;
  }

  @Get(`ab*cd`)
  findOne(): string {
    return `WildCard in the middle of the route, supported by only express`;
  }
}
