import { ErrorMessage, Field, Formik } from 'formik'
import { useEffect, useState } from 'react'
import findCategory from '../../helpers/findCategory'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Category, Product as ProductInterface } from '../../model'
import { useGetAllProductQuery } from '../../services'
import { TableRow } from '../table/components'
import BundledProduct from './BundledProduct'
import { ActionButtons, BundleProducts, BundleProductsContainer, ItemRowInfo, ItemRowInfoContainer, LeftProductContent, ProductBottomSide, ProductContainer, ProductMenu, RightProductContent } from './components'
import Logic from './Logic'
interface Props {
  data: ProductInterface;
  categories: Category[]
}
function Product({ data, categories }: Props) {
  const [toggle, setToggle] = useState(false)
  const [bundleChildrenProductIds, setBundleChildrenProductIds] = useState<number[]>([]);
  const [imageFile, setImageFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);

  const { productName, price, category, sub_category, stock, image_url, id, categoryId: category_id, subcategoryId: subcategory_id, quantity } = data;
  const [disableUpdate, setDisableUpdate] = useState(true)
  const { handleDelete, onSubmit, validationSchema } = Logic({ imageUrl, setDisableUpdate, imageFile, bundleChildrenProductIds })
  const [categoryId, setterCategoryId] = useState(category_id)
  const [subcategoryId, setterSubcategoryId] = useState(subcategory_id)

  const getBase64FromUrl = async (url: string) => {
    const data = await fetch(url);
    const blob = await data.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      if (!imageFile) {
        setImageFile(blob)
        setImageUrl(reader.result)
      }
    };
  };

  getBase64FromUrl(data.image_url)

  const initialValues = {
    id,
    productName,
    price,
    stock,
    quantity,
    details: data.details || '',
    image_url: imageFile,
    image_id: data.image_id || '',
    categoryId: data.categoryId,
    subcategoryId: data.subcategoryId,
    productType: data?.productType,
  }

  const { data: products, refetch: refetechProduct } = useGetAllProductQuery({
    searchName: '',
    categoryId,
    subcategoryId: 0,
    setcategoryId: 0
  }, {
    refetchOnFocus: true,
    refetchOnReconnect: true
  });

  const fetchBundleProductList = products
    ?.filter(product => product.productType === 'SINGLE')
    ?.map(product => (
      <BundledProduct
        data={product}
        bundleChildrenProductIds={bundleChildrenProductIds}
        setBundleChildrenProductIds={setBundleChildrenProductIds}
      />
    ))

  useEffect(() => {
    data?.bundleParentProduct.forEach((data, index) => {
      setBundleChildrenProductIds(prev => [...prev, data?.bundleChildProduct.id])
    })
  }, [])

  return (
    <ProductContainer>
      <TableRow>
        <td className="image"> <div className='image-border'>{imageUrl?.length > 0 && <img src={imageUrl} />} </div></td>
        <td className="name">{productName}</td>
        <td className="category">{category?.name}</td>
        <td className="subcategory">{sub_category?.name}</td>
        <td className="price">{productPriceFormatter(price + '')}</td>
        <td className="stock">Qty: {stock} </td>
        <td className="action" onClick={() => setToggle(prev => !prev)}><i className="fa-solid fa-chevron-down"></i></td>
      </TableRow>
      {
        toggle && <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {
            formik => {
              console.log(formik.errors)
              const onUploadChange = (e: any) => {
                if (!e.target.files) return;
                const file = e.target.files[0]
                formik.setTouched({
                  ...formik.touched,
                  image_url: true,
                });
                formik.setFieldValue("image_url", file);
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = () => {
                  setImageUrl(fileReader.result)
                }
              };

              const findCategory = () => {
                return categories?.find(value => value.id === Number(formik.values.categoryId))
              }

              const findSubcategory = () => {
                return findCategory()?.sub_category?.find(value => value.id === Number(formik.values.subcategoryId))
              }

              const fetchCategories = categories?.map((category) => (
                <option value={category?.id} key={category?.id}>{category?.name}</option>
              ))

              const fetchSubCategories = findCategory()?.sub_category.map((subcategory) => (
                <option value={subcategory?.id} key={subcategory?.id}>{subcategory?.name}</option>
              ))

              if (!isNaN(Number(formik.values.categoryId))) {
                setterCategoryId(Number(formik.values.categoryId))
              } else {
                setterCategoryId(0)
              }

              if (!isNaN(Number(formik.values.subcategoryId))) {
                setterSubcategoryId(Number(formik.values.subcategoryId))
              } else {
                setterSubcategoryId(0)
              }

              return <ProductBottomSide>
                <ProductMenu>
                  <LeftProductContent disableUpdate={disableUpdate}>
                    <label htmlFor='image_url'>
                      {
                        imageUrl?.length > 0 ? <img src={imageUrl} /> : <>no photos</>
                      }
                    </label>
                    <ErrorMessage name="image_url" component={'div'} className="error__message" />
                    <input name="image_url" style={{ display: 'none' }} type="file" id="image_url" disabled={disableUpdate} onChange={onUploadChange} />
                    <ActionButtons>
                      {
                        disableUpdate ? <input type="button" value={'Edit'} onClick={() => setDisableUpdate(false)} /> :
                          <button type='submit' value={'Save'}>Save</button>
                      }
                      <input type="button" value={'Delete'} onClick={() => handleDelete(id)} />
                    </ActionButtons>
                  </LeftProductContent>

                  <RightProductContent>
                    <ItemRowInfoContainer>
                      <ItemRowInfo>
                        <label htmlFor="productName">Name</label>
                        <Field name="productName" placeholder="Product name" id="productName" disabled={disableUpdate} />
                        <ErrorMessage name="productName" component={'div'} className="error__message" />
                      </ItemRowInfo>
                      <ItemRowInfo>
                        <label htmlFor="price">Price</label>
                        <Field name="price" placeholder="Product price" id="price" type="number" disabled={disableUpdate} />
                        <ErrorMessage name="price" component={'div'} className="error__message" />
                      </ItemRowInfo>
                      {
                        data?.productType === 'BUNDLE' ? 
                        <ItemRowInfo>
                          <label htmlFor="quantity">Serving Quantity</label>
                          <Field name="quantity" id="quantity" placeholder="Serving quantity" type="number" disabled={disableUpdate} />
                          <ErrorMessage name="quantity" component={'div'} className="error__message" />
                        </ItemRowInfo>
                        : 
                        <ItemRowInfo>
                        <label htmlFor="stock">Stock</label>
                        <Field name="stock" id="stock" placeholder="Product stock" type="number" disabled={disableUpdate} />
                        <ErrorMessage name="stock" component={'div'} className="error__message" />
                      </ItemRowInfo>
                      }

                    </ItemRowInfoContainer>

                    <ItemRowInfoContainer>

                      <ItemRowInfo>
                        <label htmlFor="categoryId">Category</label>
                        <Field as={'select'} name="categoryId" id="categoryId" disabled={disableUpdate} >
                          <option value="">Select Category</option>
                          {fetchCategories}
                        </Field>
                        <ErrorMessage name="categoryId" component={'div'} className="error__message" />
                      </ItemRowInfo>

                      {
                         data?.productType !=='ADDONS' && <ItemRowInfo>
                         <label htmlFor="subcategoryId">Subcategory</label>
                         <Field as={'select'} name="subcategoryId" id="subcategoryId" disabled={disableUpdate} >
                           <option value="">Select Subcategory</option>
                           {fetchSubCategories}
                         </Field>
                         <ErrorMessage name="subcategoryId" component={'div'} className="error__message" />
                       </ItemRowInfo>
                      }
                      

                    </ItemRowInfoContainer>

                    <ItemRowInfoContainer>
                      <ItemRowInfo>
                        <label htmlFor="details">details</label>
                        <Field as={'textarea'} placeholder="Product details" name={'details'} id="details" disabled={disableUpdate} >
                        </Field>
                        <ErrorMessage name="details" component={'div'} className="error__message" />
                      </ItemRowInfo>
                    </ItemRowInfoContainer>
                  </RightProductContent>
                </ProductMenu>

                { data?.productType === 'BUNDLE' && <BundleProductsContainer 
                  style={{
                    pointerEvents: disableUpdate ? 'none' : 'all'
                  }}
                >

                  <h1 style={{
                    color:'gray'
                  }}>Variations</h1>
                     <BundleProducts>
                      {fetchBundleProductList}
                     </BundleProducts>
                  
                </BundleProductsContainer> }


              </ProductBottomSide>
            }
          }
        </Formik>
      }
    </ProductContainer>
  )
}

export default Product