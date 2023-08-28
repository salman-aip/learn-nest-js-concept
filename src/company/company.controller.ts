import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyInterceptor } from './company.interceptor';
import { TransformInterceptor } from './transform.interceptor';
import { ErrorsInterceptor } from './error.interceptor';
import { CacheInterceptor } from './cache.interceptor';

@Controller('company')
@UseInterceptors(CompanyInterceptor)
// pass an in-place instance
//@UseInterceptors(new CompanyInterceptor())

//response mapping
// exception mapping
// stream override - cache interceptor
@UseInterceptors(TransformInterceptor, ErrorsInterceptor, CacheInterceptor)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
