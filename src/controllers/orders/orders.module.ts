import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersService } from 'src/services/orders/orders.service';
import { Order, OrderSchema } from 'src/shemas/orders';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}]),
//         PassportModule,
//         JwtModule.register({
//             secret: jwtConst.secret,
//             signOptions: { expiresIn: '60s'},
// })
],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
