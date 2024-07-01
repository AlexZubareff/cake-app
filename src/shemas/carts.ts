import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ICart } from 'src/interfaces/cart';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart implements ICart {

    @Prop({required: true, minlength: 2})
    title: string
   
    @Prop({required: true})
    description: string;
  
    @Prop()
    // ({required: true})
    manufacturer: string;
  
    @Prop()
    price: number;
  
    @Prop()
    img: string;
  
    @Prop()
    id: string;

    @Prop()
    count: number;

}

export const CartSchema = SchemaFactory.createForClass(Cart);