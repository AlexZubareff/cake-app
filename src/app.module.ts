import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './controllers/users/users.module';
import { ProductsModule } from './controllers/products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cake-app'),
    UsersModule, 
    ProductsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
