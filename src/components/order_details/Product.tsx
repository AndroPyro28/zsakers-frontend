import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model'
import { OrderedProduct, ProductCalculation, ProductName, ProductPrice } from '../../pages/admin/order_details/components'

function Product({data}: {data:CartProduct}) {
  return (
    <OrderedProduct>
    <img src={data.product.image_url} alt="" className="product__image" />
    <ProductName>
      <span className="detail1">{data.product.productName}</span>
      <small className="detail2"> {data.product.details}</small>
    </ProductName>
    <ProductCalculation>₱ {data.product.price} x {data.quantity} </ProductCalculation>
    <ProductPrice>{productPriceFormatter(data.product.price * data.quantity + '')}</ProductPrice>
  </OrderedProduct>
  )
}

export default Product