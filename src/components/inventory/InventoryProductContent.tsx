import React, { useEffect, useState } from 'react'
import { ButtonContainer, ProductListContainer} from "../../pages/admin/inventory/components"
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../app/services'
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
import FilterItems from './FilterItems'
import Product from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faHourglass3 } from '@fortawesome/free-solid-svg-icons'

interface Props {
    searchName: string,
     setSearchName: React.Dispatch<React.SetStateAction<string>>
}
function InventoryProductContent({searchName, setSearchName}: Props) {

    const [categoryId, setterCategoryId] = useState<number>(0)
    const [subcategoryId, setterSubCategoryId] = useState<number>(0)
    
    const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
    const [viewCategory, setViewCategory] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0)

    const { data: categories, refetch: refetchCategory } = useGetAllCategoryQuery('', {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        pollingInterval: 10
      })


      const { data: products, isLoading, error, refetch: refetechProduct } = useGetAllProductQuery({
        searchName,
        categoryId,
        subcategoryId,
        setcategoryId: 0
      }, {
        refetchOnFocus: true,
        refetchOnReconnect: true
      });
      
      useEffect(() => {
        // to reset all the filter
        setterSubCategoryId(0)
        setSearchName('')

      }, [categoryId])
    
      useEffect(() => {
        refetchCategory()
        refetechProduct()
      }, [])

      if (isLoading) return <></>
      const fetchProducts = products?.filter(product => product?.productType == 'SINGLE')?.slice(8 * currentPage, 8 * currentPage + 8)?.map((product) => (
        <Product key={product.id} data={product} categories={categories!} />
      ))

      const numberOfProducts = products?.filter(product => product?.productType == 'SINGLE').length


      
  return (
    <>
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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={maxPage}
        setMaxPage={setMaxPage}
        numberOfProducts={numberOfProducts!}
        productType={"SINGLE"}
      />
    }

    <InventoryTableRow />

    <ProductListContainer>
      {fetchProducts!.length > 0 ? fetchProducts : <h3>No Products</h3>}
    </ProductListContainer>
    </>
  )
}

export default InventoryProductContent



