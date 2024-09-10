import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ICart } from 'src/interfaces/cart';
import { IProductInCart } from 'src/interfaces/product';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ timestamps: true })
export class Cart implements ICart {
 

    @Prop()
    userId: string
   
    // @Prop()
    // cart: IProductInCart[
        
    // ];
    @Prop()
    cart: Array<IProductInCart>;

  

}

export const CartSchema = SchemaFactory.createForClass(Cart);