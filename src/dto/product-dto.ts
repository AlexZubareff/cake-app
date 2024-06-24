import { IProduct } from "src/interfaces/product"

export class ProductDto implements IProduct {
    title: string;
    description: string;
    manufacturer?: string;
    price: string;
    img: string;
    id?: string;
    // _id?: string;
}