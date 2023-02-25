import { Product } from "./product";

export interface CartProduct {
    id: number;
    product: Product,
    quantity: number;
    // purchase?: boolean 
}

export interface UpdateQuantity {
    id: number;
    action: 'decrement' | 'increment';
}