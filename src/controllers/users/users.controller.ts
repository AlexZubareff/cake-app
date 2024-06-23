import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/dto/user-dto';
import { UsersService } from 'src/services/users/users.service';
import { User } from 'src/shemas/user';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService ){}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers()
    }
    @Get(":id")
    getUserById(@Param('id') id): Promise<User> {
        return this.usersService.getUserById(id)
    }

    @Post()
    addUser(@Body() data): Promise<User> {
        // console.log(data)
        return this.usersService.checkRegUser(data.login).then((queryRes)=> {
            console.log('data reg', queryRes)
            if (queryRes.length === 0) {
                return this.usersService.addUser(data);
            } else {
                console.log('err - user is exists')
                throw new HttpException({
                  status: HttpStatus.CONFLICT,
                  errorText: 'Пользователь уже зарегистрирован',
                }, HttpStatus.CONFLICT);
            }
        })
    }

    @UseGuards(AuthGuard('local'))
    @Post(":login")
    authUser(@Body() data: UserDto, @Param('login') login): any  {

        console.log('auth User Data: ', data);
      
        return this.usersService.login(data)
     }

    @Put(":id")
    updateUser(@Param('id') id, @Body() data): Promise<User> {
      return this.usersService.updateUser(id, data);
    }
  
  
    @Delete(":id")
    deleteUserById(@Param('id') id): Promise<User> {
      return this.usersService.deleteUserById(id);
    }

}
