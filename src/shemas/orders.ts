import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IOrder } from 'src/interfaces/order';
import { IProductInCart } from 'src/interfaces/product';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order implements IOrder {
 

    @Prop()
    userId: string
   
    // @Prop()
    // cart: IProductInCart[
        
    // ];
    @Prop()
    order: Array<IProductInCart>;

  

}

export const OrderSchema = SchemaFactory.createForClass(Order);