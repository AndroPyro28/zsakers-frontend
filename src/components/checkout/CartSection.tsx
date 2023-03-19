import { useEffect } from 'react';
import { useGetCartProducts } from '../../services/cart-products';
import CartProduct from './CartProduct'
import { CartProducts } from './components'


interface props {
  setRefresher: React.Dispatch<React.SetStateAction<boolean>>
}
function CartSection({setRefresher}: props) {

  const { data: cartProducts } = useGetCartProducts();
  const fetchCartProducts = cartProducts?.map((cartProduct) => <CartProduct 
  setRefresher={setRefresher}
  data={cartProduct} key={cartProduct.id} />)

  return (
    <CartProducts>
      {fetchCartProducts}
    </CartProducts>
  )
}

export default CartSection