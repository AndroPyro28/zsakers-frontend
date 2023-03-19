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
export const getAddedProductToCheckout = (state: any) => state?.checkout.reduce((total: any, cartProduct: CartProduct) => {
  //   if(cartProduct?.Cart_Product_Variant!.length > 0) {
  //     const addonsPrice = cartProduct?.Cart_Product_Variant!.reduce((totalAddonsValue: number, addon: CartProduct) => {
  //       const addonPrice = addon.product.productType === 'ADDONS' ? addon?.product.price : 0;
  //       return addonPrice + totalAddonsValue
  //     }, 0)
  //     return (addonsPrice + total + cartProduct.product.price) * cartProduct.quantity
  //   }

  //   return (total + cartProduct.product.price) * cartProduct.quantity
  // }, 0)
    return total + (cartProduct.product.price * cartProduct.quantity)
});

export default checkoutSlice.reducer;