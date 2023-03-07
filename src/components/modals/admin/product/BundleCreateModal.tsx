import { ErrorMessage, Field, Formik } from 'formik'
import React, { useState } from 'react'
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../../../services';
import { ProductList } from '../../../featured-products/components';
import { InventoryCreateModalBackdrop, InventoryBundleCreate, CreateBundleForm, FormFieldContainer, FieldInputContainer, ProductBundlingList, FormFieldBundleContainer } from '../components'
import BundleLogic from './BundleLogic';
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface Props {
    setOpenCreateProductModal: React.Dispatch<React.SetStateAction<boolean>>
}
function BundleCreateModal({setOpenCreateProductModal}: Props) {
    const [productIds, setProductIds] = useState<number[]>([])

    const { onSubmit, initialValues, validationSchema } = BundleLogic({productIds})
    const [categoryId, setterCategoryId] = useState<number>(0)
    const [subcategoryId, setterSubcategoryId] = useState<number>(0)

    const { data: categories } = useGetAllCategoryQuery('');
    const { data: products} = useGetAllProductQuery({
        categoryId: categoryId,
        subcategoryId: 0,
        setcategoryId: 0,
        searchName: ''
    })
    const category = categories?.find(value => value.id == categoryId)
    
  return (
    <InventoryCreateModalBackdrop>
        <InventoryBundleCreate>
        <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}>
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

                    return <CreateBundleForm autoComplete='off'>
                        <h1>Bundle Information</h1>
                        <FontAwesomeIcon icon={faClose} className="closeBtn" onClick={(() => setOpenCreateProductModal(false))}/>
                        <FormFieldBundleContainer>
                                <label htmlFor="productName">Name</label>
                                <FieldInputContainer>
                                    <Field name="productName" id="productName" type="text" placeholder="Product Name" />
                                    <ErrorMessage name="productName" component={'div'} className="error__message" />
                                </FieldInputContainer>
                        </FormFieldBundleContainer>

                        <FormFieldBundleContainer>
                                <label htmlFor="productPrice">Price <sup>(₱)</sup> </label>
                                <FieldInputContainer>
                                    <Field name="productPrice" id="productPrice" type="number" placeholder="₱ 00.00" />
                                    <ErrorMessage name="productPrice" component={'div'} className="error__message" />
                                </FieldInputContainer>
                        </FormFieldBundleContainer>

                        <FormFieldBundleContainer>
                                <label htmlFor="quantity">Quantity </label>
                                <FieldInputContainer>
                                    <Field name="quantity" id="quantity" type="number" placeholder="Serving quantity" />
                                    <ErrorMessage name="quantity" component={'div'} className="error__message" />
                                </FieldInputContainer>
                        </FormFieldBundleContainer>

                        <FormFieldBundleContainer>
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
                        </FormFieldBundleContainer>

                        <FormFieldBundleContainer>
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
                            </FormFieldBundleContainer>

                            <FormFieldBundleContainer>
                                <label htmlFor="details">Details <sup>(optional)</sup>  </label>
                                <FieldInputContainer>
                                    <Field name="details" id="details" as="textarea" placeholder="Details..." />
                                    <ErrorMessage name="details" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldBundleContainer>

                            <FormFieldBundleContainer>
                                <label htmlFor="image">Image <sup>(optional)</sup> </label>
                                <FieldInputContainer>
                                    <input name="image" type="file" id="image" onChange={onUploadChange} />
                                    <ErrorMessage name="image" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldBundleContainer>
                            <button type='submit'>Create Product</button>
                    </CreateBundleForm>
                }
            }
        </Formik>
        <ProductBundlingList>
            <h2>Choose products</h2>

            <ProductList>
            { 
              products?.filter((product) => product?.productType === 'SINGLE')?.map((product) => {
                return <Product data={product} setProductIds={setProductIds} productIds={productIds} />
              })
            }
            </ProductList>
            
        </ProductBundlingList>
        </InventoryBundleCreate>
    </InventoryCreateModalBackdrop>
  )
}

export default BundleCreateModal