import { ErrorMessage, Field, Formik } from 'formik'
import { Form, Link } from 'react-router-dom'
import { FieldContainer } from '../login/components'
import * as yup from 'yup'
import { ForgotPasswordContainer, ForgotPasswordWrapper, BackgroundBlur, ForgotPasswordFieldContainer, ForgotPasswordFieldWrapper } from './components'
import { useEffect, useState } from 'react'
import { useCodeConfirmationMutation, useForgotPasswordMutation } from '../../../services'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

function ForgotPassword() {

    type forgotPassword = {
        value: string,
        error: string,
    }
    const [email, setEmail] = useState<forgotPassword>({
        value: '',
        error: '',
    })

    const [code, setCode] = useState<forgotPassword>({
        value: '',
        error: '',
    })

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(prev => ({ ...prev, value: e.target.value, }));
    }

    const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(prev => ({ ...prev, value: e.target.value, }));
    }

    // useEffect(() => {
    //     const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //     if(email.value.length > 0) {
    //         const isEmail = emailPattern.test(email.value);

    //         if(!isEmail) {
    //             setEmail(prev => ({...prev, error: 'Must be an email'}))
    //         } else {
    //             setEmail(prev => ({...prev, error: ''}))
    //         }
    //     } else {
    //         setEmail(prev => ({...prev, error: 'This field is required'}))
    //     }

    // }, [email.value])

    const [forgotPassword] = useForgotPasswordMutation()

    const sendCodeByEmail = async () => {
        try {
            const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (email.value.length <= 0) return setEmail(prev => ({ ...prev, error: 'This field is required' }))
            const isEmail = emailPattern.test(email.value);

            if (!isEmail) return setEmail(prev => ({ ...prev, error: 'Must be an email' }))

            setEmail(prev => ({ ...prev, error: '' }))
            const result: any = await forgotPassword(email.value);
            const { data, error } = result;
            if (error) {
                return toast(error.data.message, { type: 'warning' })
            } else {
                return toast(data.message, { type: 'success' })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const [codeConfimation] = useCodeConfirmationMutation()
    const confirmCode = async () => {
        try {
            const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (email.value.length <= 0) return setEmail(prev => ({ ...prev, error: 'This field is required' }))
            const isEmail = emailPattern.test(email.value);

            if (!isEmail) return setEmail(prev => ({ ...prev, error: 'Must be an email' }))

            if (code.value.length <= 0) return setCode(prev => ({ ...prev, error: 'This field is required' }));

            const result: any = await codeConfimation({ email: email.value, code: code.value });

            const { data, error } = result;

            if (error) {
                return toast(error.data.message, { type: 'warning' })
            } else {
                const fiveMinutes = new Date(new Date().getTime() + 15 * 60 * 1000) // five minutes
                Cookies.set('password_reset_token', data.token, {
                    secure: true,
                    expires: fiveMinutes
                })
                window.location.assign('/reset-password')
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ForgotPasswordWrapper>
            <BackgroundBlur>
                <ForgotPasswordContainer>
                    <Link to={'/'} className="back-a">
                        <i className="fa-solid fa-arrow-left backBtn"></i>
                    </Link>
                    {/* <img src="/assets/logo.jpg" alt="" /> */}
                    <h1>Find your account</h1>
                    <p>Please enter your email to search for your account</p>

                    <ForgotPasswordFieldWrapper>
                        <ForgotPasswordFieldContainer>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChangeEmail}
                            />
                            <button onClick={sendCodeByEmail}>Send Code</button>
                        </ForgotPasswordFieldContainer>
                        <div className='error__message'>{email.error}</div>
                    </ForgotPasswordFieldWrapper>

                    <ForgotPasswordFieldWrapper>
                        <ForgotPasswordFieldContainer>
                            <input
                                type="text"
                                onChange={handleChangeCode}
                                placeholder="Enter your your code"
                            />
                            <button onClick={confirmCode}>Confirm</button>
                        </ForgotPasswordFieldContainer>
                        <div className='error__message'>{code.error}</div>

                    </ForgotPasswordFieldWrapper>

                </ForgotPasswordContainer>
            </BackgroundBlur>

        </ForgotPasswordWrapper>
    )
}

export default ForgotPassword