import { IconContainer } from "../../../../appComponents"
import { CategoryModalBackdrop, CategoryModalContainer, TitleAndContent, CategoryContent } from "./components"
import LeftCategoryContent from "./LeftCategoryContent"
import RightCategoryContent from "./RightCategoryContent"

interface Props {setViewCategory: React.Dispatch<React.SetStateAction<boolean>>}

function CategoryModal({setViewCategory}: Props) {
  return (
    <CategoryModalBackdrop>
        <CategoryModalContainer>
          <IconContainer onClick={() => setViewCategory(false)}>
          <i className="fa-solid fa-xmark"></i>
          </IconContainer>
          
            <TitleAndContent>
                <h1>Category & Subcategory</h1>
                <p>Categories and subcategories help in organizing and classifying products, improving user experience, and enabling targeted marketing in product management.</p>
            </TitleAndContent>
            <CategoryContent>
                <LeftCategoryContent />
                <RightCategoryContent />
            </CategoryContent>
        </CategoryModalContainer>
    </CategoryModalBackdrop>
  )
}

export default CategoryModal