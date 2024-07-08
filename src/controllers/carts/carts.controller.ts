import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { CartsService } from 'src/services/carts/carts.service';
import { Cart } from 'src/shemas/carts';

@Controller('carts')
export class CartsController {

    constructor(private cartsService: CartsService ){}

    @Get()
    getAllCarts(): Promise<Cart[]> {
        return this.cartsService.getAllCarts()
    }
    @Get(":id")
    getCartById(@Param('id') id): Promise<Cart> {
        return this.cartsService.getCartById(id)
    }

    // @Get(":id")
    // getUserCart(@Param('id') id): Promise<Cart> {
    //     return this.cartsService.getCartById(id)
    // }

    @Post()
    addCart(@Body() data): Promise<Cart> {
        console.log(' data from Front: ',data)
            if (data.length !== 0) {
                return this.cartsService.addCart(data);
            } else {
                // console.log('err - user is exists')
                // throw new HttpException({
                //   status: HttpStatus.CONFLICT,
                //   errorText: 'Пользователь уже зарегистрирован',
                // }, HttpStatus.CONFLICT);
            }
        }

    @Put(":id")
    updateCart(@Param('id') id, @Body() data): Promise<Cart> {
      return this.cartsService.updateUserCart(id, data);
    }
    
    }


