import { faEdit, faFloppyDisk, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, ErrorMessage } from 'formik'
import { useState } from 'react';
import { useGetCurrentUser } from '../../../services';
import { RowInfo, UserInfo } from './components'
import Logic from './Logic'
function Personal() {
  const { data: user } = useGetCurrentUser();
  const { firstname, lastname, address, contact } = user?.profile!;
  const [allowChanges, setAllowChanges] = useState<boolean>(false)
  const { initialValues, validationSchema, onSubmit } = Logic({setAllowChanges})

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {
        (formik) => {
          return <UserInfo>
            {
              !allowChanges ? <FontAwesomeIcon icon={faUserEdit} className="editBtn" onClick={() => setAllowChanges(true)} /> : <button type='submit'><FontAwesomeIcon icon={faFloppyDisk} className="editBtn" /></button>
            }
            
            <RowInfo>
              <div className="info">
                <h3>FIRST NAME</h3>

                {
                  !allowChanges ? <span>{firstname}</span> :
                    <><Field name="firstname" placeholder="Firstname" />
                      <ErrorMessage name="firstname" component="div" className='error__message' /></>
                }

              </div>

              <div className="info">
                <h3>LAST NAME</h3>

                {
                  !allowChanges ? <span>{lastname}</span> :
                    <>
                      <Field name="lastname" placeholder="Lastname" />
                      <ErrorMessage name="lastname" component="div" className='error__message' />
                    </>
                }
                
              </div>
            </RowInfo>

            <RowInfo>
              <div className="info">
                <h3>ADDRESS</h3>

                {
                  !allowChanges ? <span>{address}</span> :
                    <>
                      <Field name="address" placeholder="Address" />
                      <ErrorMessage name="address" component="div" className='error__message' />
                    </>
                }
              </div>

              <div className="info">
                <h3>CONTACT</h3>
                
                {
                  !allowChanges ? <span>{contact}</span> :
                    <>
                      <Field name="contact" placeholder="Contact" />
                      <ErrorMessage name="contact" component="div" className='error__message' />
                    </>
                }

                
              </div>
            </RowInfo>

            <RowInfo>

              <div className="info">
                <h3>Email</h3>
                <span>Menandroeugenio1028@gmail.com</span>
              </div>
            </RowInfo>
          </UserInfo>
        }
      }
    </Formik>
  )
}

export default Personal