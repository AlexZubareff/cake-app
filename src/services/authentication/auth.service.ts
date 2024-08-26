

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({usernameField: 'login', passwordField: 'password'});
  }

  async validate(login: string, password: string): Promise<any> {

    console.log('AUTH SEVICE login:', login, 'password: ', password);

    const user = await this.usersService.checkAuthUser(login, password);
    
    console.log('AUTH SEVICE  auth User data: ', user);

    if (!user) {
        throw new HttpException({
                status: HttpStatus.CONFLICT,
                errorText: 'Пользователь не найден',
              }, HttpStatus.CONFLICT);
    }
    return true;
  }
}