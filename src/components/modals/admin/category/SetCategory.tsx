import { ErrorMessage, Field, Formik } from 'formik'
import React, { useState } from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter'
import { SetCategory as SetCategoryInterface } from '../../../../model/SetCategory'
import { FieldInputContainer } from '../components'
import { SetCategoryContainer } from './components'
import SetCategoryLogic from './SetCategoryLogic'
interface Props {
  data: SetCategoryInterface
}
function SetCategory({ data }: Props) {
  const { dateAndTimeParser } = DateTimeFormatter()
  const { date, time } = dateAndTimeParser(data.createdAt)
  const [allowUpdate, setAllowUpdate] = useState(false);

  const { updateSetCategory, validationSchema, deleteSetCategory } = SetCategoryLogic({ setAllowUpdate })
  const initialValueUpdateSetCategory = {
    id: data.id,
    setcategory: data.name,
    premium: data.premium
  }
  return (
    <Formik
      initialValues={initialValueUpdateSetCategory}
      validationSchema={validationSchema}
      onSubmit={updateSetCategory}
    >{
      (formik) => {
        return <SetCategoryContainer>
        {
          allowUpdate ? <FieldInputContainer className='setcategory'>
            <Field type="text" name="setcategory" placeholder="setcategory name" />
            <ErrorMessage name="setcategory" component={'div'} className="error__message" />
          </FieldInputContainer> : <td>{data.name} </td>
        }
        {
            allowUpdate ? <FieldInputContainer>
              <label htmlFor=""> <Field type="checkbox" name="premium" /> premium </label>
           </FieldInputContainer> : <td>{Boolean(data.premium) ? <small>premium</small> : <small>regular</small>} </td>
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
          <span onClick={() => deleteSetCategory(data.id)}>
            <i className="fa-solid fa-eraser"></i>
          </span>
        </td>
      </SetCategoryContainer>
      }
    }
      
    </Formik>

  )
}

export default SetCategory
