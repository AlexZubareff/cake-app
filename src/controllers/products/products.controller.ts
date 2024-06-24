import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';

import { ProductsService } from 'src/services/products/products.service';
import { Product } from 'src/shemas/product';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}
    
    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productsService.getAllProducts()
    }
    @Get(":id")
    getProductById(@Param('id') id): Promise<Product> {
        return this.productsService.getProductById(id)
    }

    @Post()
    addProduct(@Body() data): Promise<Product> {
        // console.log(data)

            if (data!== 0) {
                return this.productsService.addProduct(data);
            } else {
                console.log('err - product')
                throw new HttpException({
                  status: HttpStatus.CONFLICT,
                  errorText: 'Продукт ошибка',
                }, HttpStatus.CONFLICT);
            }
       
    }


}
