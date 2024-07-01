import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from 'src/shemas/carts';

@Injectable()
export class CartsService {

    constructor(
        @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    ){}
  
    async getAllCarts(): Promise<Cart[]> {
        return this.cartModel.find()
    }
   
    async getCartById(id: string): Promise<Cart> {
        return this.cartModel.findById(id)
    }

    async addCart(data): Promise<Cart> {



      const cartData = new this.cartModel(data);
      return cartData.save();
    }


}
