import { Controller, Get } from '@nestjs/common';
import { OrdersService } from 'src/services/orders/orders.service';
import { Order } from 'src/shemas/orders';

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService ){}

    @Get()
    getAllOrders(): Promise<Order[]> {
        return this.ordersService.getAllOrders();
    }
}
