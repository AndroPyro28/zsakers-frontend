import React from 'react'
import { OrderDetails } from '../../model'

import {
    CustomerDetails,
    CustomerInfoContainer,
  } from "../../pages/admin/order_details/components"

function Details({data}: {data:OrderDetails}) {
  return (
     <CustomerDetails>
          <h3>Customer Details</h3>

          <CustomerInfoContainer>
            <div className="customer__info">
              {" "}
              <i className="fa-solid fa-user"></i> {data?.user.profile.firstname} {data?.user.profile.lastname}
            </div>
            <div className="customer__info">
              <i className="fa-solid fa-flag"></i> Philippines
            </div>
          </CustomerInfoContainer>

          <CustomerInfoContainer>
            <div className="customer__info">
              <i className="fa-solid fa-envelope"></i> {data?.user.email}
            </div>
            <div className="customer__info">
              <i className="fa-solid fa-road"></i> {data?.address} 
            </div>
            
          </CustomerInfoContainer>

          <CustomerInfoContainer>

            <div className="customer__info">
              <i className="fa-solid fa-phone"></i> {data?.contact}
            </div>
            <div className="customer__info">
              <i className="fa-solid fa-credit-card"></i> {data?.paymentMethod} Payment
            </div>
            
          </CustomerInfoContainer>
        </CustomerDetails>
  )
}

export default Details