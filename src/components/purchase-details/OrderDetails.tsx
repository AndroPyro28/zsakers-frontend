import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { OrderDetails as OrderDetailModel } from '../../model'
import { DeliveryInfo, DeliveryInfoContainer, Header } from '../../pages/customer/purchase-detail/components'

interface Props {
    data: OrderDetailModel
}
function OrderDetails({data}: Props) {
    const subtotal = data?.cart_product.reduce((total, cart) => total +(cart.quantity * cart.product.price) , 0)

  return (
    <DeliveryInfoContainer>
    <Header>
      <h1>Order # {data?.order_id}</h1>
      
    </Header>

    <DeliveryInfo>
      <small>
        <i className="fa-solid fa-basket-shopping"></i> {data.cart_product.length} item(s)
      </small>
      <small>
      <i className="fa-solid fa-receipt"></i> total {productPriceFormatter(data?.totalAmount + '')} pesos only
      </small>
      <small>
      <i className="fa-solid fa-receipt"></i> subtotal: {productPriceFormatter(subtotal + '')} pesos only
      </small>
      <small>
      <i className="fa-solid fa-receipt"></i> shipping: {productPriceFormatter(Math.round(40) + '')} pesos only
      </small>
      <small>
      <i className="fa-solid fa-credit-card"></i> {data?.paymentMethod} Payment
      </small>
    </DeliveryInfo>


    <DeliveryInfo>
      <small>
        <i className="fa-solid fa-user"></i> {data?.user.profile.firstname} {data?.user.profile.lastname}
      </small>
      <small>
        <i className="fa-solid fa-phone"></i>+{data?.contact}
      </small>
      <small>
        <i className="fa-solid fa-location-dot"></i> {data?.address}
      </small>
    </DeliveryInfo>

    {/* <DeliveryInfo>
      <h4>
        Delivered by {" "}
        <small>
          {data.courrier_type} Delivery Service
        </small>
      </h4>

      <i className="fa-solid fa-truck-fast track"></i>

      <p> Dispatched at {GetDateToday()} </p>
    </DeliveryInfo> */}
  </DeliveryInfoContainer>
  )
}

export default OrderDetails