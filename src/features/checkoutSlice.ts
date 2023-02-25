import {createSlice, current} from "@reduxjs/toolkit";
import { CartProduct } from "../model";

const checkoutSlice = createSlice({
    name: "Cart",
    initialState:<CartProduct []> [],

    reducers: {
        checkout(state, action) {
            const foundIndex = current(state).findIndex(cartProduct => cartProduct.id == action.payload.id);
            if(foundIndex == -1) {
                state.push(action.payload)
            } else {
                state.splice(foundIndex, 1);
            }
        }
    },
})

export const { checkout } =  checkoutSlice.actions;

export const getCartProductId = (state: any, cartId:number) => state?.checkout?.some(((cartProduct: CartProduct) => cartProduct.id == cartId));
export const getCartProducts = (state: any) => state?.checkout;

export default checkoutSlice.reducer;