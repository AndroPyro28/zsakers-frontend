import { ErrorMessage, Field, Formik } from 'formik'
import { ModalBackdrop } from '../../components'
import { CreateEmployeeForm, FieldContainer } from './components'
import Logic from './Logic'

interface Props {
    setToggleCreate : React.Dispatch<React.SetStateAction<boolean>>
}
function CreateEmployee({setToggleCreate}: Props) {

    const {initialValues, validationSchema, onSubmit} = Logic()

    const handleExit = () => setToggleCreate(prev => false)
  return (
    <ModalBackdrop>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return <CreateEmployeeForm>
                        
                        <div onClick={handleExit}>
                            <i className="fa-solid fa-xmark exit"></i>
                        </div>
                        
                        <h1><i className="fa-solid fa-user-tie"></i> Add Employee</h1>


                        <FieldContainer>
                            <label htmlFor=""> <i className="fa-solid fa-signature"></i> Firstname  </label>
                            <Field name="firstname" type="text" placeholder="Firstname..." />
                            <ErrorMessage name="firstname" component={'div'} className="error" />
                        </FieldContainer>

                        <FieldContainer>
                            <label htmlFor=""> <i className="fa-solid fa-signature"></i> Lastname  </label>
                            <Field name="lastname" type="text" placeholder="lastname..." />
                            <ErrorMessage name="lastname" component={'div'} className="error" />
                        </FieldContainer>

                        <FieldContainer>
                            <label htmlFor=""><i className="fa-solid fa-map-location"></i> Full address  </label>
                            <Field name="address" type="text" placeholder="address" />
                            <ErrorMessage name="address" component={'div'} className="error" />
                        </FieldContainer>


                        <FieldContainer>
                            <label htmlFor=""><i className="fa-solid fa-envelope"></i> Email </label>
                            <Field name="email" type="email" placeholder="Email..." />
                            <ErrorMessage name="email" component={'div'} className="error" />
                        </FieldContainer>

                        <FieldContainer>
                            <label htmlFor=""><i className="fa-solid fa-hashtag"></i> Contact </label>
                            <Field name="contact" type="text" placeholder="Contact" />
                            <ErrorMessage name="contact" component={'div'} className="error" />
                        </FieldContainer>

                        <button>Create</button>

                    </CreateEmployeeForm>
                }
            }
        </Formik>
        
    </ModalBackdrop>
  )
}

export default CreateEmployee