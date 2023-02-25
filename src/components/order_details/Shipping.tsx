import React from 'react'
import { OrderDetails } from '../../model'
import { ShippingDetails } from '../../pages/admin/order_details/components'

interface Props {
  data: OrderDetails
}

function Shipping({data}: Props) {
  return (
    <ShippingDetails>
    <h3>Cancel Order</h3>
        <h4>Order has been cancelled</h4>
        <p><h4>Reason:</h4> {data?.cancel_reason} </p>
  </ShippingDetails>
  )
}

export default Shipping