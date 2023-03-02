import * as yup from "yup";
import { CreateProduct } from "../../../../model";
import { useCreateProductMutation } from "../../../../services";
import {toast} from 'react-toastify'
interface Props {
  productIds: number[]
}
function BundleLogic({productIds}: Props) {
  const [createProduct] = useCreateProductMutation();
  const onSubmit = async (values: CreateProduct, { resetForm }: any) => {
    try {
      if (values.image) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(values.image);
        fileReader.onloadend = async () => {
          const res: any = await createProduct({
            ...values,
            image: fileReader.result,
            productIds: productIds
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
          image: null,
          productIds: productIds
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
    productStock: 0,
    quantity: "",
    details: "",
    image: "",
    categoryId: "",
    subcategoryId: "",
    productType:"BUNDLE",
    productIds: []
    // setcategoryId: "",
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
      .required("Name is required field")
      .min(6, "Name must be atleast 6 characters"),
      // .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    productPrice: yup
      .number()
      .required("Price is required field")
      .min(0, "Price must be minimum of 0"),
    productStock: yup
      .number()
      .required("Stock is required field")
      .min(0, "Stock must be minimum of 0"),
    quantity: yup
      .number()
      .required("Serving Quantity is required field")
      .min(3, "Serving Quantity must be minimum of 3"),
    categoryId: yup.number().required("Category is required field"),
    subcategoryId: yup.number().required("Subcategory is required field"),
    // setcategoryId: yup.number().required("Setcategory is required field"),
    // productId: yup.number(),
    details: yup
      .string()
      .typeError("Details is required field")
      .min(6, "Details must be atleast 6 characters"),
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

export default BundleLogic;
