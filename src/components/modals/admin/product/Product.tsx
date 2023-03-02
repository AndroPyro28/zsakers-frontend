import React, { useEffect, useState } from 'react'
import { Product as ProductInterface } from '../../../../model'
import { ProductContainer, ProductName, ProductPrice } from '../../../featured-products/components'

interface Props {
  data: ProductInterface
  productIds: number[]
  setProductIds: React.Dispatch<React.SetStateAction<number[]>>
}
function Product({data, setProductIds, productIds}: Props) {

  const isFound = productIds.some(value => value == data.id);

  const handleOnClick = () => {
    setProductIds(prev => {
      if(!isFound) {
        return [...prev, data.id];
      } else {
        return prev?.filter((value) => value != data.id);
      }
    })
  }

  return (
    <ProductContainer onClick={handleOnClick} style={{
      border: isFound ? 'solid 1px gray' : 'none'
    }} >
    <img src={data.image_url} />
    <ProductName>{data.productName}</ProductName>
    <ProductPrice>Php {data.price}</ProductPrice>
    </ProductContainer>
  )
}

export default Product