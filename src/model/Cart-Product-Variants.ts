import { Product } from "./product";

export interface Cart_Product_Variant {
    id: number;
    quantity: number;
    cart_product_id: number;
    product: Product
}

export type Cart_Product_Variants = Cart_Product_Variant[]
