import React from 'react'
import { Product as ProductModel} from '../../model'
import { ProductContainer, ProductName, ProductPrice } from './components'
import { useNavigate } from 'react-router-dom'
function Product({data}: {data: ProductModel }) {

  const navigate = useNavigate();
  
  return (
    <ProductContainer onClick={() => navigate('/customer/store')}>
        <img src={data.image_url} />

        <ProductName>{data.productName}</ProductName>
        <ProductPrice>Php {data.price}</ProductPrice>
    </ProductContainer>
  )
}

export default Product