import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsController } from './carts.controller';
import { CartsService } from 'src/services/carts/carts.service';
import { Cart, CartSchema } from 'src/shemas/carts';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Cart.name, schema: CartSchema}]),
],
    controllers: [CartsController],
    providers: [CartsService]
})

export class CartsModule {}
