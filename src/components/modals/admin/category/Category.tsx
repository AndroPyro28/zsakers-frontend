import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter';
import { Category as CategoryInterface} from '../../../../model/Category';
import { CategoryContainer, CategoryWrapper, SubCategoryListContainer, CreateSubCategoryContainer, CategoryInputField, LeftForm } from './components'
import SubCategoryLogic from './SubCategoryLogic';
import SubCategory from './SubCategory';
import CategoryLogic from './CategoryLogic'
import { FieldInputContainer } from '../components';
function Category({data}: {data: CategoryInterface}) {

  const [showSubCategories, setShowSubCategories] = useState(false);
  const {initialValuesCreateSubCategory,
    validationSchema,
    createSubCategory} = SubCategoryLogic({categoryId: data.id})

    const {dateAndTimeParser} = DateTimeFormatter()
    const {date, time} = dateAndTimeParser(data.createdAt)
    const {sub_category} = data;
    const [allowUpdate, setAllowUpdate] = useState(false);
    const {validationSchema: validationSchemaUpdateCategory, updateCategory, deleteCategory } = CategoryLogic({setAllowUpdate})
    const initialValuesUpdateCategory = {
      id: data.id,
      category: data.name
    }
  return (
    <CategoryWrapper>
      <Formik
      onSubmit={updateCategory}
      initialValues={initialValuesUpdateCategory}
      validationSchema={validationSchemaUpdateCategory}
      >
      <CategoryContainer>
          {
            allowUpdate ? <FieldInputContainer>
            <Field type="text" name="category" placeholder="category name" />
            <ErrorMessage name="category" component={'div'} className="error__message" />
           </FieldInputContainer> : <td>{data.name} </td>
          }
          

          {
            !allowUpdate && <td>{date} at {time}</td>
          }
          <td>
            
            {
              !allowUpdate ? <span onClick={() => setAllowUpdate(true)}><i className="fa-solid fa-file-pen"></i></span> : <button type='submit'>
              <i className="fa-solid fa-file-pen"></i>
            </button>
            }

            <span onClick={() => deleteCategory(data.id)}>
            <i className="fa-solid fa-eraser"></i>
            </span>
          </td>
          <td><span className="subcategories__button" onClick={() => setShowSubCategories(prev => !prev)}><i className={ showSubCategories ? "fa-solid fa-chevron-down" : "fa-sharp fa-solid fa-chevron-up"}></i></span></td>
      </CategoryContainer>
      </Formik>
      {
        showSubCategories && <SubCategoryListContainer>

          {
            sub_category && sub_category.map((subcategory) => (
              <SubCategory key={subcategory.id} data={subcategory} />
            ))
          }

        <CreateSubCategoryContainer>
        <Formik
        initialValues={initialValuesCreateSubCategory}
        validationSchema={validationSchema}
        onSubmit={createSubCategory}      
        >
        {
          formik => {
            return <LeftForm autoComplete='off'>
              <CategoryInputField>
                <div className='input-field left'>
                  <Field name="subcategory" type="text" placeholder="Name (e.g 1 piece, bundle, etc)" />
                  <ErrorMessage name="subcategory"  className='error__message' component={'div'} />
                </div>
                <button style={{width:'200px'}}>Create Subcategory</button>
              </CategoryInputField>
            </LeftForm>
          }
        }
        
      </Formik>
        </CreateSubCategoryContainer>
      </SubCategoryListContainer>
      }
      
    </CategoryWrapper>

  )
}

export default Category