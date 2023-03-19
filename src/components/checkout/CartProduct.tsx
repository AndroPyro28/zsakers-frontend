import { useDispatch } from 'react-redux';
import { checkout, getCartProductId } from '../../features';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct as CartProdutModel } from '../../model'
import Logic from '../cart-popup/Logic';
import { CartProductContainer } from './components'
import { useSelector } from 'react-redux';
import { useDeleteOneCartProductMutation } from '../../services/cart-products';
import { useEffect, useState } from 'react';
interface Props {
  data: CartProdutModel
  setRefresher: React.Dispatch<React.SetStateAction<boolean>>
}

function CartProduct({ data, setRefresher }: Props) {
  const { product, quantity, id, Cart_Product_Variant } = data;
  const { updateCartQuantity } = Logic()
  const dispatch = useDispatch();
  const isInCheckout = useSelector(state => getCartProductId(state, id));
  const addToCheckout = () => {
    dispatch(checkout(data))
  }
  const [deleteOne] = useDeleteOneCartProductMutation()
  const handleDelete = async () => {
    const res = await deleteOne(data.id)
  }
  const [price, setPrice] = useState(0)

  // useEffect(() => {
  //   setPrice(quantity * product.price)
  //   if (Cart_Product_Variant && Cart_Product_Variant?.length > 0) {
  //     const addonPrice = Cart_Product_Variant.reduce((total, cartVariant) => {
  //       const addonPrice = cartVariant.product.productType === 'ADDONS' ?
  //       total + (cartVariant.quantity * cartVariant.product.price) : 0;
  //       return addonPrice * quantity
  //     }, 0)
  //     setPrice((quantity * product.price) + addonPrice);
  //   }
  // }, [data])

  useEffect(() => {
    setPrice(quantity * product.price)
  if (Cart_Product_Variant && Cart_Product_Variant?.length > 0) {
    const addonPrice = Cart_Product_Variant.reduce((total, cartVariant) => {
      const addonPrice = cartVariant.product.productType === 'ADDONS' ?
        total + cartVariant.product.price : 0;
      return (addonPrice)
    }, 0)
    setPrice(quantity * (product.price + addonPrice));
  }
}, [data, setRefresher])

const handleIncrement = () => {
  updateCartQuantity(id, 'increment')
  setRefresher(prev => !prev)
}

const handleDecrement = () => {
  updateCartQuantity(id, 'decrement')
  setRefresher(prev => !prev)
}

  return (
    <CartProductContainer isInCheckout={isInCheckout}>
      <td className='checkout'> <span onClick={addToCheckout}><i className="fa-solid fa-basket-shopping"></i></span></td>
      <td><img src={product.image_url} alt="" /></td>
      <td className='name-details'>
        <span className='name'>{product?.productName}</span>
        <span className='details'>{product.details}</span>
      </td>
      <td className='quantity'>
        <button onClick={handleDecrement} className="dec">-</button>
        <span className='qty'>{data?.quantity}</span>
        <button disabled={data?.quantity >= product.stock && product.productType === 'SINGLE'} 
        onClick={handleIncrement} className="inc">+</button>
      </td>
      <td className='calculation'>@ {price / data?.quantity} x {data?.quantity}</td>
      <td className='price'> {productPriceFormatter(price + '')} </td>
      <td className='remove'> <span onClick={handleDelete}>Remove</span>  </td>
    </CartProductContainer>
  )
}

export default CartProduct