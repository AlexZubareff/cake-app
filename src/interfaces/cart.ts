import { IProduct } from "./product";

export interface ICart extends IProduct{
    title: string,
    description: string,
    manufacturer?: string,
    price: number,
    img: string,
    id?: string,
    count: number
}