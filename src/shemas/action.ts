import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IAction } from 'src/interfaces/action';

export type ActionDocument = HydratedDocument<Action>;

@Schema()
export class Action implements IAction {

@Prop({required: true, minlength: 2})
  title: string
 
  @Prop({required: true})
  description: string;


  @Prop()
  img: string;

  @Prop()
  id: string;

  @Prop()
  type: string;

}

export const ActionSchema = SchemaFactory.createForClass(Action);