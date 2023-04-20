import * as yup from 'yup'
import { Signin } from '../../../model'
import { useSigninMutation } from '../../../app/services'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

function Logic() {
  const [signinMutation] = useSigninMutation()
  const navigate = useNavigate()
  const onSubmit = async (values: Signin) => {
      try {
        const res:any = await signinMutation(values);
        const {error, data} = res;
        if(error) {
          throw new Error(error.data.message)
        }
        else {
          Cookies.set('access_token', data.access_token, {
            secure: true,
            expires: 1
          })
          window.location.assign(`/${data.role}`);
        }
      } catch (error: any) {
        toast(error.message, {type:'warning'})
        console.error(error.message)
      }
    }

    const initialValues = <Signin>{
      email: '',
      password: ''
    }

    const validationSchema = yup.object().shape({
        email: yup.string().required('This field is required').email('This must be a valid email'),
        password: yup.string().required('This field is required')
    })
  return {
    onSubmit,
    initialValues,
    validationSchema,
  }
}

export default Logic