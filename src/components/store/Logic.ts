import React from 'react'
import { toast } from 'react-toastify';
import { Product } from '../../model';
import { useAddToCartMutation, useGetCartProducts, useUpdateQuantityMutation } from '../../services/cart-products';

function Logic() {
    const [addToCartMutation] = useAddToCartMutation();
    const {data: cartProducts} = useGetCartProducts()
    const [updateQuantity] = useUpdateQuantityMutation()
    
    const addToCart = async (product: Product) => {
        try {
           const cartProduct = cartProducts?.find((cartProduct) => cartProduct.product.id == product.id);
        if(!cartProduct && product?.stock > 0) {
            const result = await addToCartMutation(product.id);
        }
        else if (cartProduct && cartProduct.quantity < product?.stock ) {
          const result = await updateQuantity({
            id: cartProduct.id,
            action: 'increment'
          })
        }
        else {
            toast('You reached the maximum stock of this product', {type: 'info'})
        }
        } catch (error) {
            console.error(error)
        }
    }
    return {
        addToCart
    }
}

export default Logic