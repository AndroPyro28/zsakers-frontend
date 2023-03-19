import React, { useEffect, useState } from 'react'
import BundleCreateModal from '../modals/admin/product/BundleCreateModal'
import {  ButtonContainer, ProductListContainer } from "../../pages/admin/inventory/components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../services'
import FilterItems from './FilterItems'
import InventoryTableRow from '../table/InventoryTableRow'
import Product from './Product'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import AddonsCreateModal from '../modals/admin/product/AddonsCreateModal'

interface Props {
  searchName: string,
   setSearchName: React.Dispatch<React.SetStateAction<string>>
}
function InventoryAddonsContent({searchName, setSearchName}: Props) {
    const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
    const [categoryId, setterCategoryId] = useState<number>(0)
    const [subcategoryId, setterSubCategoryId] = useState<number>(0)
    const [viewCategory, setViewCategory] = useState<boolean>(false)


    const { data: products, isLoading, error, refetch: refetechProduct } = useGetAllProductQuery({
        searchName,
        categoryId,
        subcategoryId,
        setcategoryId: 0
      }, {
        refetchOnFocus: true,
        refetchOnReconnect: true
      });
    
      const { data: categories, refetch: refetchCategory } = useGetAllCategoryQuery('', {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        pollingInterval: 10
      })

      useEffect(() => {
        // to reset all the filter
        setterSubCategoryId(0)
        setSearchName('')
      }, [categoryId])
    
      useEffect(() => {
        refetchCategory()
        refetechProduct()
      }, [])

      const fetchProducts = products?.filter(product => product?.productType == 'ADDONS')?.map((product) => (
        <Product key={product.id} data={product} categories={categories!} />
      ))

  return (
    <>   

    {openCreateProductModal &&  <AddonsCreateModal setOpenCreateProductModal={setOpenCreateProductModal} /> }
       <ButtonContainer>
        <button onClick={() => setOpenCreateProductModal(true)}>
          Add addons  &nbsp;
          <FontAwesomeIcon icon={faPlus} />
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
      />
    }

    <InventoryTableRow />

    <ProductListContainer>
      {fetchProducts}
    </ProductListContainer>

    </>
  )
}

export default InventoryAddonsContent