import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICart } from 'src/interfaces/cart';
import { IProductInCart } from 'src/interfaces/product';
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


    // async getUserCart(id: string): Promise<any> {
    //     return this.cartModel.find({userId: id})
    // }

    async addCart(data: ICart): Promise<Cart> {

        console.log('data in cartService: ', data)

      const cartData = new this.cartModel();
      cartData.userId = data.userId;
      cartData.cart = data.cart;
      console.log('cartData to save: ', cartData)

      console.log('cartData to save: ', cartData)
      return cartData.save();
    }


    async updateUserCart(id: string, data: IProductInCart[]): Promise<Cart> {
        console.log('updateUserCart: ', id, data);
        const newUserCart  = await this.cartModel.findById(id).exec();
        console.log('UserCart: ', newUserCart);
        newUserCart.cart = data;

        return newUserCart.save();
      }
    
}
