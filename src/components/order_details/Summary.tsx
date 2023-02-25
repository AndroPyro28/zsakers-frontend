import { useLocation } from 'react-router-dom';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { OrderDetails } from '../../model'
import { OrderCalculation } from '../../pages/admin/order_details/components'
import { OrderSummary } from '../../pages/admin/order_details/components'

function Summary({data}:{data:OrderDetails}) {

  const subtotal = data?.cart_product.reduce((total, cart) => total +(cart.quantity * cart.product.price) , 0);
  const tax = (subtotal! / 1.12) * .12;
  const {pathname} = useLocation();

  return (
    <OrderSummary>
      <OrderCalculation>
        <div>Subtotal:</div>
        <div>{productPriceFormatter(subtotal + '') }</div>
      </OrderCalculation>

      {
        pathname?.includes('/orders/online') && <OrderCalculation>
        <div>Shipping:</div>
        <div>{productPriceFormatter(40 + '')}</div>
      </OrderCalculation>
      }

      {
      //   pathname?.includes('/orders/walk-in') && <OrderCalculation>
      //   <div>Tax:</div>
      //   <div>{productPriceFormatter(tax + '')}</div>
      // </OrderCalculation>
      }
      

      <OrderCalculation>
        <div>Total:</div>
        <div>{productPriceFormatter(data?.totalAmount + '')}</div>
      </OrderCalculation>
    </OrderSummary>
  )
}

export default Summary