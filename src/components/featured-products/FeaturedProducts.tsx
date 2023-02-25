import React, { useState } from 'react'
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../services'
import { FeaturedProductsContainer, Products, Productsidebar, ProductList} from "./components"
import Product from './Product'
function FeaturedProducts() {

  const [categoryId, setCategoryId] = useState(0);
  const {data: categories } = useGetAllCategoryQuery('');
  const {data: products } = useGetAllProductQuery(
    {
      searchName: '',
      categoryId,
      subcategoryId: 0,
      setcategoryId: 0
    }
  )
  return (
    <FeaturedProductsContainer>
      <Productsidebar>
        <span className={categoryId === 0 ? 'active' : ''}
        onClick={() => setCategoryId(0)}
        >All</span>
        {
          categories?.map((category) => <span 
          onClick={() => setCategoryId(category?.id)}
          className={categoryId === category?.id ? 'active' : ''}
          >{category?.name}
          </span>)
        }
      </Productsidebar>
      <Products>
        <h1>Our Products</h1>

        

      <ProductList>
        {
          products?.map((product) => <Product data={product} />)
        }
      </ProductList>
       
      </Products>
    </FeaturedProductsContainer>
  )
}

export default FeaturedProducts