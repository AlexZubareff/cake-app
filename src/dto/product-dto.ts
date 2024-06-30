import { IProduct } from "src/interfaces/product"

export class ProductDto implements IProduct {
    title: string;
    description: string;
    manufacturer?: string;
    price: number;
    img: string;
    id?: string;
    // _id?: string;
}