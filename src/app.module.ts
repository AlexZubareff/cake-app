import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './controllers/users/users.module';
import { ProductsModule } from './controllers/products/products.module';
import { CartsModule } from './controllers/carts/carts.module';
import { ActionsModule } from './controllers/actions/actions.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cake-app'),
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot(process.env.DATABASE_URI, {
    //   dbName: process.env.DATABASE_NAME,
    //   auth: {
    //     username: process.env.DATABASE_USER,
    //     password: process.env.DATABASE_PASS,
    //   },
    // }),
    // MongooseModule.forRoot('mongodb://localhost:27017/', {
    //   dbName:"cake-app",
    //   auth: {
    //     username: 'rootcakeapp',
    //     password: 'cakeapppassword',
    //   },
    // }),

    UsersModule, 
    ProductsModule,
    CartsModule,
    ActionsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
