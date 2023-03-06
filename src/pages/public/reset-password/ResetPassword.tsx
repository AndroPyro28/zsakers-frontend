import { ErrorMessage, Field, Formik, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { ForgotPasswordWrapper, BackgroundBlur, ForgotPasswordContainer, ResetPasswordFieldWrapper, } from '../forgot-password/components'
import { toast } from 'react-toastify';
import { UpdatePassword } from '../../../model/Update-Password';
import { useUpdatePasswordMutation } from '../../../services/update-password';
import Cookies from 'js-cookie';

function ResetPassword() {

    const initialValues = {
        password: '',
        confirmPassword: ''
    }

    const [updatePassword] = useUpdatePasswordMutation()
    const navigate = useNavigate();
    const onSubmit = async (values: UpdatePassword) => {
        try {
            const result: any = await updatePassword(values);
            console.log(result)
            const {data} = result;

            if(Boolean(data?.count)) {
                Cookies.remove('password_reset_token');
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    }


    const validationSchema = yup.object().shape({
        password: yup
            .string()
            .required('This is required field')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must contain 8 Characters, one uppercase, one lowercase, one number and one special case character"
            ),
        confirmPassword: yup.string()
            .required('Password confirmation is required')
            .when("password", (password, field) => password ?
                field.required('Confirmation password is required').oneOf(
                    [yup.ref("password")],
                    "Password and confirmation password do not match"
                )
                : field
            ),
    })

    return (
        <ForgotPasswordWrapper>
            <BackgroundBlur>

                <ForgotPasswordContainer>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formik) => {
                            return (
                                <Form autoComplete="off" className="reset-password-form">
                                    <Link to={'/'} className="back-a">
                                        <i className="fa-solid fa-arrow-left backBtn"></i>
                                    </Link>
                                    <h1>Reset Password</h1>
                                    <p>Enter your desired password.</p>

                                    <ResetPasswordFieldWrapper>
                                        <Field name="password" placeholder="Password" type="password" />
                                        <ErrorMessage name="password" component={'div'} className='error__message' />
                                    </ResetPasswordFieldWrapper>

                                    <ResetPasswordFieldWrapper>
                                        <Field name="confirmPassword" placeholder="Password Confirmation" type="password" />
                                        <ErrorMessage name="confirmPassword" component={'div'} className='error__message' />
                                    </ResetPasswordFieldWrapper>

                                    <button type="submit">Confirm</button>
                                </Form>
                            );
                        }}
                    </Formik>
                </ForgotPasswordContainer>
            </BackgroundBlur>

        </ForgotPasswordWrapper>
    )
}

export default ResetPassword