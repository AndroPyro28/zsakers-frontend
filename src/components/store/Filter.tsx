import React from 'react';
import { useGetAllCategoryQuery } from '../../app/services'
import { Category, CategoryList, FilterContainer, Filters } from './components'

interface Props {
  categoryId: number;
  subcategoryId: number;
  setcategoryId: number;
  searchName: string;
  setterSetcategoryId: React.Dispatch<React.SetStateAction<number>>
  setSearchName: React.Dispatch<React.SetStateAction<string>>
  setterCategoryId: React.Dispatch<React.SetStateAction<number>>
  setterSubcategoryId: React.Dispatch<React.SetStateAction<number>>
}

function Filter({ setterCategoryId, categoryId, subcategoryId, setterSubcategoryId, searchName, setSearchName, setterSetcategoryId }: Props) {

  const { data: categories, error } = useGetAllCategoryQuery('')

  const fetchCategories = categories?.map((category) => (
    <Category onClick={() => setterCategoryId(category.id)} active={category.id == categoryId}>
      <span> {category.name}</span>
    </Category>
  ))

  const category = () => {
    return categories?.find(value => value.id === categoryId)
  }
  // console.log(searchName.length > 0 ? 'black' : 'gray')
  const subcategory = () => {
    return category()?.sub_category?.find(value => value.id === subcategoryId)
  }

  const fetchSubCategories = category()?.sub_category?.map((subcategory) => (
    <option value={subcategory.id} key={subcategory.id}>{subcategory.name}</option>
  ))

  // const fetchSetCategories = subcategory()?.set_category?.map((setcategory) => (
  //   <option value={setcategory.id} key={setcategory.id}>{setcategory.name}</option>
  // ))


  return (
    <FilterContainer>
      <h1>I &nbsp; w a n t &nbsp; t o  &nbsp; e a t . . .</h1>

      <CategoryList>
        <Category onClick={() => setterCategoryId(0)} active={0 == categoryId}>
          <span> All </span>
        </Category>
        {
          fetchCategories
        }
      </CategoryList>

      <Filters>
        <div className='filter__container'>
          {
            Boolean(categoryId) && <div className='filter'>
              <label htmlFor="">Select Category</label>
              <select name="" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setterSubcategoryId(Number(e.target.value))}>
                <option value="0">All</option>
                {fetchSubCategories}
              </select>
            </div>
          }
          
        </div>
        <div className='filter__container'>
          <div className='filter'>
            <label htmlFor="" style={{ color: searchName.length > 0 ? 'black' : 'gray' }}> <i className="fa-solid fa-magnifying-glass" ></i> </label>
            <input type="text" placeholder='Search by name...' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value)} value={searchName} />
          </div>
        </div>
      </Filters>

    </FilterContainer>
  )
}

export default Filter