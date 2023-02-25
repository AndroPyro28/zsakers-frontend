import { ClientRequest } from "http";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CreateSubcategory, UpdateSetcategory } from "../../../../model";
import {
  useCreateSetCategoryMutation,
  useDeleteSetCategoryMutation,
  useUpdateSetCategoryMutation,
} from "../../../../services/set-category";

interface Props {
  subcategoryId?: number;
  setAllowUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
}
function SetCategoryLogic({ subcategoryId, setAllowUpdate }: Props) {
  const initialValuesCreateSetategory = {
    setcategory: "",
  };
  const [createSetategoryMutation] = useCreateSetCategoryMutation();
  const createSetategory = async (values: any, { resetForm }: any) => {
    try {
      const res: any = await createSetategoryMutation({
        ...values,
        subcategoryId,
      });
      const { error, data } = res;
      if (error) {
        if (typeof error.data.message === "object") {
          throw new Error(error.data.message[0]);
        } else {
          throw new Error(error.data.message);
        }
      } else {
        resetForm(initialValuesCreateSetategory);
        toast("Setcategory Created", {type: 'success'});
      }
    } catch (error: any) {
      alert(error.message);
      console.error(error);
    }
  };

  const validationSchema = yup.object().shape({
    setcategory: yup
      .string()
      .required("Setcategory required field")
      .min(3, "must be atleast 3 characters"),
  });
  const [updateSetCategoryMutation] = useUpdateSetCategoryMutation();
  const updateSetCategory = async (values: UpdateSetcategory) => {
    try {
      const res: any = await updateSetCategoryMutation(values);
      const { error, data } = res;
      if (error) {
        if (typeof error.data.message === "object") {
          throw new Error(error.data.message[0]);
        } else {
          throw new Error(error.data.message);
        }
      } else {
        // alert("Setcategory Updated");
        toast("Setcategory Updated", {type: 'success'});

      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setAllowUpdate!(false);
    }
  };

  const [deleteCategoryMutation] = useDeleteSetCategoryMutation();
  const deleteSetCategory = async (id: number) => {
    try {
      const res: any = await deleteCategoryMutation(id);
      const { error, data } = res;
      if (error) {
        if (typeof error.data.message === "object") {
          throw new Error(error.data.message[0]);
        } else {
          throw new Error(error.data.message);
        }
      } else {
        // alert("Setcategory Deleted");
        toast("Setcategory Deleted", {type: 'success'});

      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setAllowUpdate!(false);
    }
  };

  return {
    initialValuesCreateSetategory,
    createSetategory,
    validationSchema,
    updateSetCategory,
    deleteSetCategory
  };
}

export default SetCategoryLogic;
