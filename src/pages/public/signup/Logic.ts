import * as yup from 'yup'
import { Signup } from '../../../model'
import { useSignupMutation } from '../../../services'
import {useNavigate} from "react-router-dom"
function Logic({setCurrentField}: any) {

    const [signupMutation] = useSignupMutation()
    const navigate = useNavigate()
    const onSubmit = async (values: Signup) => {
        try {
        const res = await signupMutation(values);
        const { error }: any = res;
        if(error) {
            return alert(error.data.message)
        }
        navigate('/login')
        } catch (error) {
            console.error(error)
        }
        
    }

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        contact: '',
        password: '',
        confirmPassword: '',
        role: 'CUSTOMER'
    } as Signup

    const validationSchema = yup.object({
        firstname: yup.string()
        .required('Firstname is required')
        .matches(/^[A-Za-z\s]*$/, "Must container letters only")
        .min(3,'Firstname must be at least 3 characters'),
        lastname: yup.string().required('Lastname is required')
        .matches(/^[A-Za-z\s]*$/, "Must container letters only")
        .min(3,'Lastname must be at least 3 characters'),
        email: yup.string()
        .required('Email is required')
        .email('This must be a valid email'),
        address: yup.string()
        .required('Address is required'),
        contact: yup.string()
        .required('Contact is required').matches(/^[0-9]*$/, "Digits only"),
        password: yup.string()
        .required("Password is required")
        .min(6),
        confirmPassword: yup.string()
        .required('Password confirmation is required')
        .when("password", (password, field) =>  password ? 
        field.required('Confirmation password is required').oneOf(
            [yup.ref("password")],
            "Password and confirmation password do not match"
            )
          : field
      ),
    })

    const handleFieldChange = (action: string) => {
        setCurrentField((prev: number) => {
            if(action === 'prev' && prev -1 != -1) {
                return prev -1;
            }
            if(action === 'next' && prev +1 < 4) {
                return prev +1;
            }
        })
    }
  return {
    onSubmit,
    initialValues,
    validationSchema,
    handleFieldChange
  }
}

export default Logic