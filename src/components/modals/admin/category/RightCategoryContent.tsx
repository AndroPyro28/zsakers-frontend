import { Formik, Field, ErrorMessage } from 'formik'
import { CategoryInputField, RightCategoryContentContainer, RightForm } from './components'
import CategoryLogic from './CategoryLogic'

function RightCategoryContent() {

  const {initialValues, validationSchema, createCategory} = CategoryLogic({})
  return (
    <RightCategoryContentContainer>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={createCategory}      
      >
        {
          formik => {
            return <RightForm autoComplete='off'>
              <h1>Create Category</h1>
              <CategoryInputField>
                <div className='input-field right'>
                  <Field name="category" type="text" placeholder="(e.g Donut, Frapper, etc)" />
                  <ErrorMessage name="category" className='error__message' component={'div'} />
                </div>
                
                <button style={{width:'150px'}}>Create Category</button>
              </CategoryInputField>
            </RightForm>
          }
        }
        
      </Formik>
    </RightCategoryContentContainer>
  )
}

export default RightCategoryContent