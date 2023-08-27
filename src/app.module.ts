import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { AdminController } from './admin/admin.controller';
import { UsersModule } from './users/users.module';
import {
  DummyFunctionalMiddleware,
  UserMiddleware,
} from './users/users.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './users/http-exception.filter';
// import { UsersController } from './users/users.controller';
import { OperatorsModule } from './operators/operators.module';

@Module({
  imports: [UsersModule, OperatorsModule],
  controllers: [AppController, CatsController, DogsController, AdminController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})

//middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware, DummyFunctionalMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.ALL }, 'dogs/(.*)')
      .forRoutes({ path: 'users', method: RequestMethod.GET });
    // accept string, multiple string, object, controller/multiple controller
    // .forRoutes(UsersController)
  }
}
