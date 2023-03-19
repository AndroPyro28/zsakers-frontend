import React, { useEffect, useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model'
import { ProductContainer, ProductName, ProductPrice, ProductQuantity } from './components'
import Logic from './Logic'

interface Props {
    data: CartProduct
}

function CartItem({ data }: Props) {
    const { product, quantity, id, Cart_Product_Variant} = data;
    const { updateCartQuantity } = Logic()
  const [price, setPrice] = useState(0)
    
    useEffect(() => {
        setPrice(quantity * product.price)
      if (Cart_Product_Variant && Cart_Product_Variant?.length > 0) {
        const addonPrice = Cart_Product_Variant.reduce((total, cartVariant) => {
          const addonPrice = cartVariant.product.productType === 'ADDONS' ?
            total + cartVariant.product.price : 0;
          return (addonPrice)
        }, 0)
        setPrice(quantity * (product.price + addonPrice));
      }
    }, [data])

    return (
        <ProductContainer>
            <img src={product?.image_url} />
            <ProductName>
                <div>{product?.productName}</div>
                <br />
                <small>{product?.details}</small>
            </ProductName>
            <ProductQuantity>
                <button
                    className="decremeant"
                    onClick={() => updateCartQuantity(id, 'decrement')}
                >
                    -
                </button>
                {quantity}
                <button
                    className="incremeant"
                    onClick={() => updateCartQuantity(id, 'increment')}
                    disabled={quantity >= product.stock && product.productType === 'SINGLE'}
                >
                    +
                </button>
            </ProductQuantity>
            <ProductPrice>
                {productPriceFormatter((price) + '')}
            </ProductPrice>
        </ProductContainer>
    )
}

export default CartItem