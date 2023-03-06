import { prepareDataForValidation } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model'
import { useGetProductByIdQuery } from '../../services'
import { useDeleteOneCartProductMutation, useUpdateQuantityMutation } from '../../services/cart-products'
import { OrderContainer } from './components'
interface Props {
  data: CartProduct,
  // setTotalAmount: React.Dispatch<React.SetStateAction<number>>
}
function Order({ data }: Props) {

  const [updateQuantity] = useUpdateQuantityMutation()
        
  const [deleteOne] = useDeleteOneCartProductMutation()

  const handleUpdate = async (action: "increment" | "decrement") => {

    // if(action === 'increment' && data?.quantity < data?.product?.stock || action === 'decrement') {
      const res: any = await updateQuantity({
        id: data.id,
        action
      })
      if(!res.data) {
        return toast('You reached the maximum stock for this product', {type: 'info'})
      }
  }

  const handleDelete = async () => {
    const res = await deleteOne(data.id)
  }
  
  return (
    <OrderContainer>
      <td><img src={data?.product.image_url} alt="" className='image' /></td>
      <td><span className='name'>{data?.product?.productName}</span></td>
      <td>
        <button className='decrement' 
        onClick={() => handleUpdate('decrement')}>-</button> 
        <span className='quantity'>{data.quantity}</span> 
        <button className='increment'
        onClick={() => handleUpdate('increment')}
        >+</button>
        </td>
      <td><span className='price'>{productPriceFormatter((data.quantity * data?.product.price ?? 0) + '')}</span></td>
      <td className='remove'><span onClick={handleDelete}> Remove </span></td>
    </OrderContainer>
  )
}

export default Order