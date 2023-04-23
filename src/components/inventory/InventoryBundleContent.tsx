import React, { useEffect, useState } from "react";
import BundleCreateModal from "../modals/admin/product/BundleCreateModal";
import {
  ButtonContainer,
  ProductListContainer,
} from "../../pages/admin/inventory/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  useGetAllCategoryQuery,
  useGetAllProductQuery,
} from "../../app/services";
import FilterItems from "./FilterItems";
import InventoryTableRow from "../table/InventoryTableRow";
import Product from "./Product";

interface Props {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
}

function InventoryBundleContent({ searchName, setSearchName }: Props) {
  const [openCreateProductModal, setOpenCreateProductModal] =
    useState<boolean>(false);
  const [categoryId, setterCategoryId] = useState<number>(0);
  const [subcategoryId, setterSubCategoryId] = useState<number>(0);
  const [viewCategory, setViewCategory] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const {
    data: products,
    isLoading,
    error,
    refetch: refetechProduct,
  } = useGetAllProductQuery(
    {
      searchName,
      categoryId,
      subcategoryId,
      setcategoryId: 0,
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const { data: categories, refetch: refetchCategory } = useGetAllCategoryQuery(
    "",
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: 10,
    }
  );

  useEffect(() => {
    // to reset all the filter
    setterSubCategoryId(0);
    setSearchName("");
  }, [categoryId]);

  useEffect(() => {
    refetchCategory();
    refetechProduct();
  }, [categoryId, searchName, subcategoryId]);

  const fetchProducts = products
    ?.filter((product) => product?.productType == "BUNDLE")
    ?.map((product) => (
      <Product key={product.id} data={product} categories={categories!} />
    ));

  const numberOfProducts = products?.filter(
    (product) => product?.productType == "BUNDLE"
  ).length;

  return (
    <>
      {openCreateProductModal && (
        <BundleCreateModal
          setOpenCreateProductModal={setOpenCreateProductModal}
        />
      )}
      <ButtonContainer>
        <button onClick={() => setOpenCreateProductModal(true)}>
          Add bundle &nbsp;
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </ButtonContainer>

      {categories && (
        <FilterItems
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
          productType={"DOZEN"}
        />
      )}

      <InventoryTableRow />

      <ProductListContainer>
      
      {fetchProducts!.length > 0 ? fetchProducts : <h3>No Products</h3>}

        
        </ProductListContainer>
    </>
  );
}

export default InventoryBundleContent;
