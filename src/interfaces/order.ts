import { IProductInCart } from "./product";

export interface IOrder {
    userId?: string,
    order: IProductInCart[],
    productCount: string,
    productCoast: string,
    
}