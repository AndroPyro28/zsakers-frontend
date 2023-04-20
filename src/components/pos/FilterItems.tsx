import { useGetAllCategoryQuery } from '../../app/services'
import { FilterItemsContainer, Search, CategoryList, Category, SubSetCategory, Filter } from './components'

interface Props {
    categoryId: number
    setcategoryId: number
    subcategoryId: number
    searchName: string
    setterCategoryId: React.Dispatch<React.SetStateAction<number>>
    setterSetCategoryId: React.Dispatch<React.SetStateAction<number>>
    setterSubCategoryId: React.Dispatch<React.SetStateAction<number>>
    setSearchName: React.Dispatch<React.SetStateAction<string>>
}

function FilterItems({ setterCategoryId, setterSetCategoryId, setterSubCategoryId, categoryId, subcategoryId, setSearchName }: Props) {

    const { data: categories } = useGetAllCategoryQuery('')

    const category = categories?.find(value => value.id === categoryId)

    const subcategory = category?.sub_category?.find(value => value.id === subcategoryId)
    
      const fetchSubCategories = category?.sub_category.map((subcategory) => (
        <option value={subcategory.id} key={subcategory.id}>{subcategory.name}</option>
      ))
    
    //   const fetchSetCategories = subcategory?.set_category.map((setcategory) => (
    //     <option value={setcategory.id} key={setcategory.id}>{setcategory.name}</option>
    //   ))
      

    return (
        <FilterItemsContainer>
            <Search>
                <label><i className="fa-solid fa-magnifying-glass"></i> </label>
                <input type="text" placeholder='Search by name...' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value)}/>
            </Search>
            <CategoryList>
                <Category onClick={() => setterCategoryId(0)} active={0 == categoryId} >
                    All
                </Category>
                {
                    categories?.map((category) => (
                        <Category onClick={() => setterCategoryId(category.id)} active={category.id == categoryId}>
                            {category.name}
                        </Category>
                    ))
                }
            </CategoryList>

                {
                    categoryId > 0 && <SubSetCategory>
                    <Filter>
                        <label htmlFor="subcategory">Subcategory:</label>
                        <select name="" id="subcategory" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setterSubCategoryId(Number(e.target.value))}>
                            <option value={0}>Select</option>
                            { fetchSubCategories }
                        </select>
                    </Filter>
                    {/* <Filter>
                        <label htmlFor="setcategory">Setcategory:</label>
                        <select name="" id="setcategory" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setterSetCategoryId(Number(e.target.value))}>
                            <option value="">Select</option>
                            { fetchSetCategories }
                        </select>
                    </Filter> */}
                </SubSetCategory>
                }
            
        </FilterItemsContainer>
    )
}

export default FilterItems