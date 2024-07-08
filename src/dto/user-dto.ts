import {IUser} from "../interfaces/user";
 
export class UserDto implements IUser {
    login: string;
    password: string;
    email: string;
    cardNumber: string;
    id: string;
    role: string;
    cartId: string;
 }