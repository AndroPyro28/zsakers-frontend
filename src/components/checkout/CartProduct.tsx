import { useDispatch } from 'react-redux';
import { checkout, getCartProductId } from '../../features';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct as CartProdutModel } from '../../model'
import Logic from '../cart-popup/Logic';
import { CartProductContainer } from './components'
import {useSelector} from 'react-redux';
import { useDeleteOneCartProductMutation } from '../../services/cart-products';
interface Props {
  data: CartProdutModel
}

function CartProduct({data}: Props) {
  const {product, quantity, id} = data;
  const { updateCartQuantity } = Logic()
  const dispatch = useDispatch();
  const isInCheckout = useSelector(state => getCartProductId(state, id));
  const addToCheckout = () => {
    dispatch(checkout(data))
  }
  const [deleteOne] = useDeleteOneCartProductMutation()
  const handleDelete =async () => {
    const res = await deleteOne(data.id)
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
        <button onClick={() => updateCartQuantity(id, 'decrement')} className="dec">-</button>
        <span className='qty'>{data?.quantity}</span>
        <button disabled={data?.quantity >= product.stock} onClick={() => updateCartQuantity(id, 'increment')} className="inc">+</button>
      </td>
      <td className='calculation'>@ {product.price} x {data?.quantity}</td>
      <td className='price'> {productPriceFormatter(product.price * quantity + '')} </td>
      <td className='remove'> <span onClick={handleDelete}>Remove</span>  </td>
    </CartProductContainer>
  )
}

export default CartProduct