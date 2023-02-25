import * as yup from 'yup'
import { createStaff } from '../../../../model/Staff';
import { useCreateStaffMutation } from '../../../../services';
import {toast} from 'react-toastify'
function Logic() {

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        contact: '',
        role: 'STAFF',
    } as createStaff

    const validationSchema = yup.object().shape({
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
    });

    const [createStaff] = useCreateStaffMutation()
    const onSubmit = async (values: createStaff,  { resetForm }: any) => {
        try {
            const res: any = await createStaff(values)
            if('error' in res) {
                const {message} = res.error.data;
              toast(message, {type: 'warning'})
            }
            else {
              toast('Employee Created!', {type: 'success'})
              resetForm(initialValues)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return {
    initialValues,
    validationSchema,
    onSubmit,
  }
}

export default Logic