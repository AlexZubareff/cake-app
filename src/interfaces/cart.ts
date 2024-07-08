import { IProductInCart } from "./product";

export interface ICart {
    userId?: string,
    cart: IProductInCart[]

}