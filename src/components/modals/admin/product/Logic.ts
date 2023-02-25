import * as yup from "yup";
import { CreateProduct } from "../../../../model";
import { useCreateProductMutation } from "../../../../services";
import {toast} from 'react-toastify'
function Logic() {
  const [createProduct] = useCreateProductMutation();
  const onSubmit = async (values: CreateProduct, { resetForm }: any) => {
    try {
      if (values.image) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(values.image);
        fileReader.onloadend = async () => {
          const res: any = await createProduct({
            ...values,
            // productId: Boolean(values.productId) ? values.productId : null,
            image: fileReader.result,
          });

          const { error, data } = res;
          if (error) {
            if (typeof error.data.message === "object") {
              throw new Error(error.data.message[0]);
            } else {
              throw new Error(error.data.message);
            }
          } else {
            resetForm(initialValues);
            alert("Product Created");
          }
        };
      } else {
        const res: any = await createProduct({
          ...values,
          // productId: Boolean(values.productId) ? values.productId : null,
          image: null,
        });

        const { error, data } = res;
        if (error) {
          if (typeof error.data.message === "object") {
            throw new Error(error.data.message[0]);
          } else {
            throw new Error(error.data.message);
          }
        } else {
          resetForm(initialValues);
          toast("Product Created", {type: 'success'});
        }
      }
    } catch (error: any) {
      toast(error.message, {type: 'warning'});
      console.error(error);
    }
  };

  const initialValues = {
    productName: "",
    productPrice: "",
    productStock: "",
    quantity: "",
    details: "",
    image: "",
    categoryId: "",
    subcategoryId: "",
    setcategoryId: "",
    // productId: 0,
  };

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/png",
    "image/jpeg",
    "image/gif",
  ];

  const validationSchema = yup.object().shape({
    productName: yup
      .string()
      .required("Product name is required field")
      .min(6, "Product name must be atleast 6 characters"),
      // .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    productPrice: yup
      .number()
      .required("Product price is required field")
      .min(0, "Product price must be minimum of 0"),
    productStock: yup
      .number()
      .required("Product stock is required field")
      .min(0, "Product stock must be minimum of 0"),
    quantity: yup
      .number()
      .required("Quantity is required field")
      .min(1, "Quantity must be minimum of 1"),
    categoryId: yup.number().required("Category is required field"),
    subcategoryId: yup.number().required("Subcategory is required field"),
    setcategoryId: yup.number().required("Setcategory is required field"),
    // productId: yup.number(),
    details: yup
      .string()
      .typeError("details is required field")
      .min(6, "Product details must be atleast 6 characters"),
    // .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    image: yup
      .mixed()
      .test("type", "Invalid file format selection", (value) =>
        value ? SUPPORTED_FORMATS.includes(value.type) : true
      ),
  });
  return {
    onSubmit,
    initialValues,
    validationSchema,
  };
}

export default Logic;
