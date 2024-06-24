import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from 'src/services/products/products.service';
import { Product, ProductSchema } from 'src/shemas/product';
import { ProductsController } from './products.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
        controllers: [ProductsController],
        providers: [ProductsService],
})
export class ProductsModule {}
