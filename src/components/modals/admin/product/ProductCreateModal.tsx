import { FieldInputContainer, FormFieldContainer, FormFormik, InventoryCreateModalBackdrop } from '../components'
import { Formik, Field, ErrorMessage } from 'formik';
import Logic from './Logic';
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../../../services';
import { useEffect, useState } from 'react';
import { IconContainer } from '../../../../appComponents';
import findCategory from '../../../../helpers/findCategory';
import findSubcategory from '../../../../helpers/findSubcategory';

interface Props {
    setOpenCreateProductModal: React.Dispatch<React.SetStateAction<boolean>>
}

function ProductCreateModal({ setOpenCreateProductModal }: Props) {
    const { onSubmit, initialValues, validationSchema } = Logic()
    const { data: categories } = useGetAllCategoryQuery('');
    const [categoryId, setterCategoryId] = useState<number>(0)
    const [subcategoryId, setterSubcategoryId] = useState<number>(0)
    const category = categories?.find(value => value.id == categoryId)
    const subcategory = category?.sub_category.find(value => value.id == subcategoryId);
    
    return (
        <InventoryCreateModalBackdrop>
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {
                    formik => {
                        const onUploadChange = (e: any) => {
                            if (!e.target.files) return;
                            const file = e.target.files[0]
                            formik.setTouched({
                                ...formik.touched,
                                image: true,
                            });
                            formik.setFieldValue("image", file);
                        };

                        if (formik.values.categoryId.length > 0 && !isNaN(Number(formik.values.categoryId))) {
                            setterCategoryId(Number(formik.values.categoryId))
                        } else {
                            setterCategoryId(0)
                        }
                        if (formik.values.subcategoryId.length > 0 && !isNaN(Number(formik.values.subcategoryId))) {
                            setterSubcategoryId(Number(formik.values.subcategoryId))
                        } else {
                            setterSubcategoryId(0)
                        }

                        return <FormFormik autoComplete='off'>
                            <h1>Add New Product</h1>
                            <IconContainer onClick={() => setOpenCreateProductModal(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </IconContainer>

                            <FormFieldContainer>
                                <label htmlFor="productName">Name</label>
                                <FieldInputContainer>
                                    <Field name="productName" id="productName" type="text" placeholder="Product Name" />
                                    <ErrorMessage name="productName" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="productPrice">Price <sup>(₱)</sup> </label>
                                <FieldInputContainer>
                                    <Field name="productPrice" id="productPrice" type="number" placeholder="₱ 00.00" />
                                    <ErrorMessage name="productPrice" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="productStock">Stock </label>
                                <FieldInputContainer>
                                    <Field name="productStock" id="productStock" type="number" placeholder="Current Stock" />
                                    <ErrorMessage name="productStock" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="categoryId">Category</label>
                                <FieldInputContainer>
                                    <Field name="categoryId" id="categoryId" as="select" placeholder="Current Stock">
                                        <option value="">Select Category</option>
                                        {
                                            categories && categories.map(category => (
                                                <option value={category.id}>{category.name}</option>
                                            ))
                                        }
                                    </Field>
                                    <ErrorMessage name="categoryId" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="subcategoryId">Subcategory</label>
                                <FieldInputContainer>
                                    <Field name="subcategoryId" id="subcategoryId" as="select" placeholder="Current Stock">
                                        <option value="">Select subcategory</option>
                                        {
                                            category && category.sub_category?.map(subcategory => (
                                                <option value={subcategory.id}>{subcategory.name}</option>
                                            ))
                                        }
                                    </Field>
                                    <ErrorMessage name="subcategoryId" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="details">Details <sup>(optional)</sup>  </label>
                                <FieldInputContainer>
                                    <Field name="details" id="details" as="textarea" placeholder="Details..." />
                                    <ErrorMessage name="details" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="image">Image <sup>(optional)</sup> </label>
                                <FieldInputContainer>
                                    <input name="image" type="file" id="image" onChange={onUploadChange} />
                                    <ErrorMessage name="image" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>
                            
                            <button type='submit'>Create Product</button>
                        </FormFormik>
                    }
                }
            </Formik>
        </InventoryCreateModalBackdrop>
    )
}

export default ProductCreateModal