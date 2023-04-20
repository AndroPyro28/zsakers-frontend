import React from 'react'
import { toast } from 'react-toastify';
import { bundleVariants, Product } from '../../model';
import { useAddToCartMutation, useGetCartProducts, useUpdateQuantityMutation } from '../../app/services/cart-products';

interface Props {
    bundleVariants?: bundleVariants
}
function Logic({ bundleVariants }: Props) {
    const [addToCartMutation] = useAddToCartMutation();
    const {data: cartProducts} = useGetCartProducts()
    const [updateQuantity] = useUpdateQuantityMutation()
    
    const addToCart = async (product: Product) => {
        try {
           const cartProduct = cartProducts?.find((cartProduct) => cartProduct.product.id == product.id);
        if(!cartProduct && product?.stock > 0 || product.productType === 'BUNDLE') {
            toast('Product added', {type: 'success'})
            await addToCartMutation({productId: product.id, bundleVariants: bundleVariants!});

        }
        else if (cartProduct && cartProduct.quantity < product?.stock && product.productType === 'SINGLE') {
          toast('Product added', {type: 'success'})
            await updateQuantity({
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