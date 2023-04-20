import React from 'react'
import { ChangePasswordContainer, ChangePasswordForm } from './components'
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as yup from 'yup'
import { ChangePasswordModel } from '../../../model/Update-Password';
import { BackgroundBlur, ForgotPasswordContainer, ForgotPasswordWrapper, ResetPasswordFieldWrapper } from '../../public/forgot-password/components';
import { Link, useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../../app/services/user';
import { toast } from 'react-toastify';
function ChangePassword() {

    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    }
    const validationSchema = yup.object().shape({
        oldPassword: yup.string().required('Enter your old password'),
        newPassword: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must contain 8 Characters, one uppercase, one lowercase, one number and one special case character"
            ),
        confirmPassword: yup.string()
            .required('Password confirmation is required')
            .when("newPassword", (password, field) => password ?
                field.required('Confirmation password is required').oneOf(
                    [yup.ref("newPassword")],
                    "Password and confirmation password do not match"
                )
                : field
            ),

    });

    const [changePasswordMutation] = useChangePasswordMutation();
    const navigate = useNavigate();
    const onSubmit = async (values: ChangePasswordModel) => {
        const res :any = await changePasswordMutation(values)
        const { error, data } = res;
        console.log(res)
        if(error) {
            toast(typeof error?.data.message === 'object' ? typeof error?.data.message[0] : error?.data.message, {type: 'warning'})
        }
        else {
            toast('Password update success', {type: 'success'});
            setTimeout(() => {
                navigate('/')
            }, 2500)
        }
    }

    return (
        <ForgotPasswordWrapper>
            <BackgroundBlur>

                <ForgotPasswordContainer>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            (formik) => {
                                return <Form className='reset-password-form'>

                                    <Link to={'/'} className="back-a">
                                        <i className="fa-solid fa-arrow-left backBtn"></i>
                                    </Link>
                                    <h1>Change password</h1>

                                    <p>Enter your desired password.</p>
                                    <div className='passwordFieldContainer'>
                                        <ResetPasswordFieldWrapper>
                                            <Field name="oldPassword" placeholder="Current Password" type="password" />
                                            <ErrorMessage name="oldPassword" component={'div'} className='error__message' />
                                        </ResetPasswordFieldWrapper>

                                        <ResetPasswordFieldWrapper>
                                            <Field name="newPassword" placeholder="Password" type="password" />
                                            <ErrorMessage name="newPassword" component={'div'} className='error__message' />
                                        </ResetPasswordFieldWrapper>

                                        <ResetPasswordFieldWrapper>
                                            <Field name="confirmPassword" placeholder="Password Confirmation" type="password" />
                                            <ErrorMessage name="confirmPassword" component={'div'} className='error__message' />
                                        </ResetPasswordFieldWrapper>
                                    </div>

                                    <button type="submit">Confirm</button>

                                </Form>
                            }
                        }
                    </Formik>
                </ForgotPasswordContainer>

            </BackgroundBlur>
        </ForgotPasswordWrapper>
    )
}

export default ChangePassword