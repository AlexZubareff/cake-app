import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrder } from 'src/interfaces/order';
import { Order, OrderDocument } from 'src/shemas/orders';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        
    ){}
  
    async getAllOrders(): Promise<Order[]> {
        return this.orderModel.find();
    }


    async addOrder(data: IOrder): Promise<Order> {

        console.log('data in OrderService: ', data)

      const orderData = new this.orderModel();
      orderData.userId = data.userId;
      orderData.order = data.order;
      console.log('cartData to save: ', orderData)

      return orderData.save();
    }
   
}
