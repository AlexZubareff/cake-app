import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IProduct } from 'src/interfaces/product';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product implements IProduct {

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
  type: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);