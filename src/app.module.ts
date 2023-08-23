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
import { UserMiddleware } from './users/users.middleware';
// import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController, DogsController, AdminController],
  providers: [AppService],
})

//middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.ALL }, 'dogs/(.*)')
      .forRoutes({ path: 'users', method: RequestMethod.GET });
    // accept string, multiple string, object, controller/multiple controller
    // .forRoutes(UsersController)
  }
}
