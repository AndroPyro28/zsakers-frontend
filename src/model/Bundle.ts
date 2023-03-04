import { Product } from "./product";

export interface bundleParentProduct {
    id: number;
    bundleChildProduct: Product
}

export interface bundleChildProduct {
    id: number;
    bundleParentProduct: Product
}


export type bundleVariants = {quantity: number, productId: number}[];