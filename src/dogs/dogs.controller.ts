import { Controller, Get, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  findAll(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
