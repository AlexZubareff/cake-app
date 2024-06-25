import { Injectable, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user-dto';
import { User, UserDocument } from 'src/shemas/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ){}
  
    async getAllUsers(): Promise<User[]> {
        return this.userModel.find()
    }
   
    async getUserById(id: string): Promise<User> {
        return this.userModel.findById(id)
    }

    async addUser(data): Promise<User> {

      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);

      const userData = new this.userModel(data);
      return userData.save();
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({ login: login });
      }


    async checkAuthUser(login: string, password: string): Promise<User | null> {
        const user = await this.userModel.findOne({ login: login });

        // console.log('USERS SEVICE login:', login, 'password: ', password, 'user.password: ', user.password);

        if (!user) {
          return null;
        }
        if (!(await bcrypt.compare(password, user.password))) {
          console.log('USERS SEVICE WRONG PASSWORD');
          return null;
        }
        return user;
      }

      async login(user: UserDto) {
        const payload = { login: user.login, password: user.password };
        const userFromDb = await this.userModel.find({login: user.login})

        console.log('userFromDb: ', userFromDb);

        return {
          id: userFromDb[0]._id,
          login: userFromDb[0].login,
          email: userFromDb[0].email,
          access_token: this.jwtService.sign(payload),
        };
      }

      async updateUser(id: string, data): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, data);
      }
    

    
      async deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id);
      }

}

