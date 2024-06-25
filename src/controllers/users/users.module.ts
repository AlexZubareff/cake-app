import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from 'src/services/users/users.service';
import { User, UserSchema } from 'src/shemas/user';
import { AuthService } from 'src/services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from 'src/static/private/constants';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConst.secret,
            signOptions: { expiresIn: '60s'},
})],
    controllers: [UsersController],
    providers: [UsersService, AuthService],
})
export class UsersModule {}
