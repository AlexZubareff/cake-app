import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ActionsService } from 'src/services/actions/actions.service';
import { Action } from 'src/shemas/action';

@Controller('actions')
export class ActionsController {
    constructor(private actionsService: ActionsService) {}



    @Get()
    getAllActions(@Query() query: any): Promise<Action[]> {
        // console.log('Query Parameter: ', query);
        return this.actionsService.getAllActions(query)
    }

    @Get('type')
    getActionByType(@Query() query: any): Promise<Action[]> {
        console.log('Query Parameter: ', query);
        return this.actionsService.getActionByType(query)
    }



    @Get(":id")
    getActionById(@Param('id') id): Promise<Action> {
        return this.actionsService.getActionById(id)
    }


    @Post()
    addAction(@Body() data): Promise<Action> {
        // console.log(data)

            if (data!== 0) {
                return this.actionsService.addAction(data);
            } else {
                console.log('err - product')
                throw new HttpException({
                  status: HttpStatus.CONFLICT,
                  errorText: 'Продукт ошибка',
                }, HttpStatus.CONFLICT);
            }
       
    }

}
