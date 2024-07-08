import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Action, ActionDocument } from 'src/shemas/action';

@Injectable()
export class ActionsService {
    constructor(
        @InjectModel(Action.name) private actionModel: Model<ActionDocument>,

    ){}

    async getAllActions(param): Promise<Action[]> {
        return this.actionModel.find().limit(param.limit);
    }
   
    async getActionByType(param: { type: string; limit: number; }): Promise<Action[]> {
        return this.actionModel.find({"type": param.type}).limit(param.limit);
    }

    async getActionById(id: string): Promise<Action> {
        return this.actionModel.findById(id)
    }

    // async getProductByType(type: string): Promise<Product[]> {
    //     return this.productModel.findOne({"type": type})
    // }


    async addAction(data): Promise<Action> {

        const actioData = new this.actionModel(data);
        return actioData.save();
      }
}
