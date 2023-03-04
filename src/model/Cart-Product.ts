import { Cart_Product_Variants } from "./Cart-Product-Variants";
import { Product } from "./product";

export interface CartProduct {
    id: number;
    product: Product,
    quantity: number;
    Cart_Product_Variant?: Cart_Product_Variants
}

export interface UpdateQuantity {
    id: number;
    action: 'decrement' | 'increment';
}