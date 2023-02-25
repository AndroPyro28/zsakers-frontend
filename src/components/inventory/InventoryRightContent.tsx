import { useEffect, useState } from 'react'
import { InventoryRightContentContainer, FilterItemsContainer, FilterContainer, ButtonContainer, TableRow, T_HEAD, ProductListContainer } from "../../pages/admin/inventory/components"
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
import Product from './Product'
import FilterItems from './FilterItems'
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../services'

function InventoryRightContent({ searchName, setSearchName }: { searchName: string, setSearchName: React.Dispatch<React.SetStateAction<string>> }) {

  const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
  const [viewCategory, setViewCategory] = useState<boolean>(false)
  const [categoryId, setterCategoryId] = useState<number>(0)
  const [subcategoryId, setterSubCategoryId] = useState<number>(0)
  const [setcategoryId, setterSetCategoryId] = useState<number>(0)

  const { data: categories, refetch: refetchCategory } = useGetAllCategoryQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    pollingInterval: 10
  })

  const { data: products, isLoading, error, refetch: refetechProduct } = useGetAllProductQuery({
    searchName,
    categoryId,
    subcategoryId,
    setcategoryId
  }, {
    refetchOnFocus: true,
    refetchOnReconnect: true
  });

  useEffect(() => {
    // to reset all the filter
    setterSubCategoryId(0)
    setSearchName('')
    setterSetCategoryId(0)
  }, [categoryId])

  useEffect(() => {
    refetchCategory()
    refetechProduct()
  }, [])

  if (isLoading) return <></>

  const fetchProducts = products?.map((product) => (
    <Product key={product.id} data={product} categories={categories!} />
  ))

  return (
    <InventoryRightContentContainer>
      {
        openCreateProductModal && <ProductCreateModal setOpenCreateProductModal={setOpenCreateProductModal} />
      }

      {
        viewCategory && <CategoryModal setViewCategory={setViewCategory} />
      }

      <ButtonContainer>
        <button onClick={() => setViewCategory(true)}>
          View category <i className="fa-solid fa-share-nodes"></i>
        </button>
        {/* <button onClick={() => setOpenCreateProductModal(true)}>
          Bundles <i className="fa-solid fa-boxes-stacked"></i>
        </button> */}
        <button onClick={() => setOpenCreateProductModal(true)}>
          Add products <i className="fa-solid fa-plus plus"></i>
        </button>
      </ButtonContainer>

      {
        categories && <FilterItems
          setOpenCreateProductModal={setOpenCreateProductModal}
          setViewCategory={setViewCategory}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          setterCategoryId={setterCategoryId}
          setterSubCategoryId={setterSubCategoryId}
          categories={categories}
          setcategoryId={setcategoryId}
          setterSetCategoryId={setterSetCategoryId}
        />
      }


      <InventoryTableRow />

      <ProductListContainer>
        {fetchProducts}
      </ProductListContainer>

    </InventoryRightContentContainer>
  )
}

export default InventoryRightContent