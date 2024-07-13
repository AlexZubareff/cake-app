import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/shemas/product';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,

    ){}

    async getAllProducts(): Promise<Product[]> {
        return this.productModel.find();
    }
   
    async getProductByType(param: { type: string; limit: number; }): Promise<Product[]> {
        return this.productModel.find({"type": param.type}).limit(param.limit);
    }

    async getProductById(id: string): Promise<Product> {
        return this.productModel.findById(id)
    }




    async addProduct(data): Promise<Product> {

        const productData = new this.productModel(data);
        return productData.save();
      }
}
