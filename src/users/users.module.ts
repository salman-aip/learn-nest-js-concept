import { Global, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// @Global()
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  // imports: [CommonModule],
  // exports: [CommonModule],
})

// dependency injections
export class UsersModule {
  constructor(private userService: UsersService) {}
}
