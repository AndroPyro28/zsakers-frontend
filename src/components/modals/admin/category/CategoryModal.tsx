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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vel porro quidem ipsa ab laboriosam temporibus vitae laudantium iure libero possimus facilis officia labore obcaecati ea, veniam culpa. Maiores sit minus impedit voluptatibus esse commodi quisquam in suscipit magnam velit at rerum dolorem modi sapiente provident, corporis, nesciunt molestiae consectetur?</p>
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