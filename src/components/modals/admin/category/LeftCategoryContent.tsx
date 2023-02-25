import { useState } from 'react'
import { useGetAllCategoryQuery } from '../../../../services'
import Category from './Category'
import { CategoryListBody, CategoryListContainer, CategoryListFooter, CategoryListHeader, LeftCategoryContentContainer, SearchBar, SearchBarContainer } from './components'

function LeftCategoryContent() {
    const [search, setSearch] = useState<string>('');

  const {data: categories, isLoading} = useGetAllCategoryQuery(search)

  return (
    <LeftCategoryContentContainer>
            <SearchBar>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value) } placeholder='Search category' /> 
            </SearchBar>

        <CategoryListContainer>
            <CategoryListHeader>
                <th>Name</th>
                <th>Created</th>
                <th>Action</th>
                <th></th>
            </CategoryListHeader>

            <CategoryListBody>

                {
                    categories && categories.map(category => (
                        <Category key={category.id} data={category} />
                    ))
                }
                
            </CategoryListBody>

            <CategoryListFooter>

            </CategoryListFooter>
        </CategoryListContainer>
    </LeftCategoryContentContainer>
  )
}

export default LeftCategoryContent