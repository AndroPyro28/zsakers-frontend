import { useGetCartProducts } from '../../services/cart-products';
import CartProduct from './CartProduct'
import { CartProducts } from './components'

function CartSection() {

  const { data: cartProducts } = useGetCartProducts();
  const fetchCartProducts = cartProducts?.map((cartProduct) => <CartProduct data={cartProduct} key={cartProduct.id} />)

  return (
    <CartProducts>
      {fetchCartProducts}
    </CartProducts>
  )
}

export default CartSection