import { ClientRequest } from 'http'
import { toast } from 'react-toastify';
import * as yup from 'yup'
import { CreateSubcategory, UpdateSubcategory } from '../../../../model'
import { useCreateSubcategoryMutation, useDeleteSubcategoryMutation, useUpdateSubcategoryMutation } from '../../../../app/services/subcategory'

interface Props {
    categoryId?: number;
    setAllowUpdate?: React.Dispatch<React.SetStateAction<boolean>>
}
function SubCategoryLogic({categoryId, setAllowUpdate}: Props) {

    const initialValuesCreateSubCategory = {
        subcategory:'',
    }

    const [createSubCategoryMutation, {isLoading}] = useCreateSubcategoryMutation()
    const createSubCategory = async (values: any, {resetForm}:any) => {
        try {
            console.log(values);
            const res: any = await createSubCategoryMutation({...values, categoryId})
            const {error, data} = res;
            if(error) {
                if (typeof error.data.message === 'object') {
                    throw new Error(error.data.message[0]);
                  } else {
                    throw new Error(error.data.message);
                  }
            } else {
                resetForm(initialValuesCreateSubCategory)
                toast('Subcategory Created', {type: 'success'})
            }
        } catch (error: any) {
            alert(error.message)
            console.error(error)
        } finally {
        }
    }

    const validationSchema = yup.object().shape({
        subcategory: yup.string()
        .required('subcategory required field')
        .min(3, 'must be atleast 3 characters'),
    })
    const [updateSubcategoryMutation] = useUpdateSubcategoryMutation()
    const updateSubCategory = async (values: UpdateSubcategory, {resetForm}:any) => {
        try {
            const res:any = await updateSubcategoryMutation(values);
            const {error, data} = res;
            if(error) {
                if (typeof error.data.message === 'object') {
                    throw new Error(error.data.message[0]);
                  } else {
                    throw new Error(error.data.message);
                  }
            } else {
                // alert('Subcategory Updated')
                toast('Subcategory Updated', {type: 'success'})

            }
        } catch (error: any) {
            alert(error.message)
            console.error(error)
        } finally {
            setAllowUpdate!(false)
        }
    }
    const [deleteSubcategoryMutation] = useDeleteSubcategoryMutation()
    const deleteSubCategory = async (id: number) => {
        try {
            const res:any = await deleteSubcategoryMutation(id);
            const {error, data} = res;
            if(error) {
                if (typeof error.data.message === 'object') {
                    throw new Error(error.data.message[0]);
                  } else {
                    throw new Error(error.data.message);
                  }
            } else {
                // alert('Subcategory Deleted');
                toast('Subcategory Deleted', {type: 'success'})
                
            }
        } catch (error: any) {
            alert(error.message)
            console.error(error)
        } finally {
            setAllowUpdate!(false)
        }
    }

    return {
    createSubCategory,
    initialValuesCreateSubCategory,
    validationSchema,
    updateSubCategory,
    deleteSubCategory
}
}

export default SubCategoryLogic