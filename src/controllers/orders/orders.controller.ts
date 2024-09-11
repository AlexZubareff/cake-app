import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from 'src/services/orders/orders.service';
import { Order } from 'src/shemas/orders';

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService ){}

    @Get()
    getAllOrders(): Promise<Order[]> {
        return this.ordersService.getAllOrders();
    }

    @Post()
    addOrder(@Body() data): Promise<Order> {
        console.log(' data from Front: ',data)
            if (data.length !== 0) {
                return this.ordersService.addOrder(data);
            } else {
                // console.log('err - user is exists')
                // throw new HttpException({
                //   status: HttpStatus.CONFLICT,
                //   errorText: 'Пользователь уже зарегистрирован',
                // }, HttpStatus.CONFLICT);
            }
        }

}
