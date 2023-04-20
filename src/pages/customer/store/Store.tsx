import { useEffect, useState } from 'react'
import Banner from '../../../components/store/Banner';
import Filter from '../../../components/store/Filter'
import { useGetAllProductQuery } from '../../../app/services';
import { StoreContainer, StoreGlobalStyles, ProductList } from './components'
import Product from '../../../components/store/Product';
import ProductDetails from '../../../components/modals/customer/product-detail/ProductDetails';

function Store() {

  const [categoryId, setterCategoryId] = useState(0);
  const [subcategoryId, setterSubcategoryId] = useState(0);
  const [setcategoryId, setterSetcategoryId] = useState(0);
  const [searchName, setSearchName] = useState('')

  const { data: products, error, isLoading, refetch } = useGetAllProductQuery({
    categoryId,
    subcategoryId,
    searchName,
    setcategoryId
  })

  const [productId, setProductId] = useState<number>(0)

  useEffect(() => {
    refetch()
  },[])

  useEffect(() => {
    setterSubcategoryId(0)
    setterSetcategoryId(0)
  }, [categoryId])

  if (isLoading) return <></>

  const fetchProducts = products?.filter(product => product.productType !== 'ADDONS')?.map(product => (
    <Product data={product} key={product.id} setProductId={setProductId} />
  ))


  return (
    <StoreContainer>
      <Banner />
      <StoreGlobalStyles />
      {
        productId > 0 && <ProductDetails setProductId={setProductId} productId={productId}/>
      }

      <Filter
        setterCategoryId={setterCategoryId}
        setSearchName={setSearchName}
        searchName={searchName}
        setterSubcategoryId={setterSubcategoryId}
        setterSetcategoryId={setterSetcategoryId}
        categoryId={categoryId}
        subcategoryId={subcategoryId}
        setcategoryId={setcategoryId}
      />

      <ProductList>
        { products!.length > 0 ? fetchProducts : 'No products yet'}
      </ProductList>

    </StoreContainer>
  )
}

export default Store