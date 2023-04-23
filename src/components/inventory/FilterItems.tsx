import React, { useEffect } from "react";
import findCategory from "../../helpers/findCategory";
import findSubcategory from "../../helpers/findSubcategory";
import { Category, Product } from "../../model";
import {
  ButtonContainer,
  FilterContainer,
  FilterItemsContainer,
} from "../../pages/admin/inventory/components";
import Logic from "./Logic";
import { current } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  setOpenCreateProductModal: React.Dispatch<React.SetStateAction<boolean>>;
  setViewCategory?: React.Dispatch<React.SetStateAction<boolean>>;
  categoryId: number;
  subcategoryId: number;
  setterCategoryId: React.Dispatch<React.SetStateAction<number>>;
  setterSubCategoryId: React.Dispatch<React.SetStateAction<number>>;
  categories: Category[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfProducts: number;
  productType: string
}

function FilterItems({
  categoryId,
  setterCategoryId,
  subcategoryId,
  setterSubCategoryId,
  categories,
  setCurrentPage,
  currentPage,
  maxPage,
  setMaxPage,
  numberOfProducts,
  productType
}: Props) {
  const { handleChange } = Logic({});

  const category = () => {
    return categories?.find((value) => value.id === categoryId);
  };

  const subcategory = () => {
    return category()?.sub_category?.find(
      (value) => value.id === subcategoryId
    );
  };

  const fetchCategories = categories?.map((category) => (
    <option value={category.id} key={category.id}>
      {category.name}
    </option>
  ));

  const fetchSubCategories = category()?.sub_category?.filter(subcategory => subcategory.name.toLowerCase().includes(productType.toLowerCase())).map((subcategory) => (
    <option value={subcategory.id} key={subcategory.id}>
      {subcategory.name}
    </option>
  ));

  useEffect(() => {
    setMaxPage(Math.ceil(numberOfProducts / 8));
  }, [numberOfProducts]);

  return (
    <FilterItemsContainer>
      <FilterContainer>
        <span>Select Category</span>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChange(setterCategoryId, e.target.value)
          }
        >
          <option value={0}>All</option>
          {fetchCategories}
        </select>
      </FilterContainer>

          {
            productType === 'DOZEN' && <FilterContainer>
            <span>Select Subcategory</span>
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange(setterSubCategoryId, e.target.value)
              }
            >
              <option value={0}>All</option>
              {fetchSubCategories}
            </select>
          </FilterContainer>
          }
      

          {
            maxPage > 0 && <div className="pagination">
            <FontAwesomeIcon
              className="left"
              icon={faChevronLeft}
              onClick={() =>
                setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))
              }
            ></FontAwesomeIcon>
            <span>{`${currentPage + 1} / ${maxPage}`} </span>
            <FontAwesomeIcon
              className="right"
              icon={faChevronRight}
              onClick={() =>
                setCurrentPage((prev) => (prev + 1 < maxPage ? prev + 1 : prev))
              }
            ></FontAwesomeIcon>
          </div>
          }
      
    </FilterItemsContainer>
  );
}

export default FilterItems;
