import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(420)
  create(): string {
    return 'create new deshi cat';
  }

  @Get()
  @Redirect('https://www.google.com', 302)
  findAll(@Req() request: Request): string {
    return `deshi cats ${request}`;
  }

  @Get(`ab*cd`)
  findOne(): string {
    return `WildCard in the middle of the route, supported by only express`;
  }
}
