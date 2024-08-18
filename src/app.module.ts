import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './controllers/users/users.module';
import { ProductsModule } from './controllers/products/products.module';
import { CartsModule } from './controllers/carts/carts.module';
import { ActionsModule } from './controllers/actions/actions.module';


const url = process.env.MONGO_URL || 'localhost';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot('mongodb://localhost:27017/cake-app'),

    // MongooseModule.forRoot(`mongodb://${url}:27017/cake-app`),

    MongooseModule.forRoot(`mongodb://${url}:27017`, {
      dbName: process.env.DATABASE_NAME,
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
      },
    }),

    // MongooseModule.forRoot('mongodb://localhost:27017/', {
    //   dbName: process.env.DATABASE_NAME,
    //   auth: {
    //     username: process.env.DATABASE_USER,
    //     password: process.env.DATABASE_PASS,
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
export class AppModule {
  // constructor(private configService: ConfigService) {}
}
