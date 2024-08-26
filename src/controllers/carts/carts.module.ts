import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsController } from './carts.controller';
import { CartsService } from 'src/services/carts/carts.service';
import { Cart, CartSchema } from 'src/shemas/carts';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConst } from '../../static/private/constants';
import { JwtStrategyService } from 'src/services/authentication/jwt-strategy/jwt-strategy.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Cart.name, schema: CartSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConst.secret,
            signOptions: { expiresIn: '60s'},
})],
    controllers: [CartsController],
    providers: [CartsService, JwtStrategyService]
})

export class CartsModule {}
