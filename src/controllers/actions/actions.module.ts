import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionSchema } from 'src/shemas/action';
import { ActionsController } from './actions.controller';
import { ActionsService } from 'src/services/actions/actions.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Action.name, schema: ActionSchema}])],
    controllers: [ActionsController],
    providers: [ActionsService],
})
export class ActionsModule {}
