import { Product } from "./product";

export interface bundleParentProduct {
    id: number;
    bundleChildProduct: Product
}

export interface bundleChildProduct {
    id: number;
    bundleParentProduct: Product
}