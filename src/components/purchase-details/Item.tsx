import React from 'react'
import { CartProduct } from '../../model'
import { Img, OrderedItemContainer, ProductDescription, ProductName, ProductPrice, ProductQuantity } from '../../pages/customer/purchase-detail/components'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
interface Props {
    data: CartProduct
}
function Item({data}: Props) {

  return (
    <OrderedItemContainer>
    <Img src={data?.product.image_url} />

    <ProductName> {data?.product.productName} </ProductName>
    <ProductDescription> {data?.product.details} </ProductDescription>
    <ProductQuantity>Qty: {data?.quantity} </ProductQuantity>
    <ProductPrice>
      {productPriceFormatter(data?.quantity * data?.product.price + '')}
    </ProductPrice>
  </OrderedItemContainer>
  )
}

export default Item