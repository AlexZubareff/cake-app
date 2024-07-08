import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './controllers/users/users.module';
import { ProductsModule } from './controllers/products/products.module';
import { CartsModule } from './controllers/carts/carts.module';
import { ActionsModule } from './controllers/actions/actions.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cake-app'),
    UsersModule, 
    ProductsModule,
    CartsModule,
    ActionsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
