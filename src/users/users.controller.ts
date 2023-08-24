import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  BadRequestException,
  UseFilters,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomException } from './user.exception';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  @UseFilters(HttpExceptionFilter) // reduce memory usages
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    // built-in exceptions:::
    // throw new BadRequestException('Something bad happened', {
    //   cause: new Error(),
    //   description: 'Some error description',
    // });

    return this.usersService.findAll();

    // catch(error) {

    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'This is a custom message',
    //     },
    //     HttpStatus.FORBIDDEN,
    //     {
    //       cause: error
    //     },
    //   )
    // }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);

    // custom exception
    //throw new CustomException();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
