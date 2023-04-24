import React, { useEffect, useState } from 'react'
import { OrderDetails } from '../../model';
import { ButtonStatusContainer, OrderStatus, OrderStatusContainer, OrderStatusInfo } from '../../pages/admin/order_details/components'
import Logic from './Logic';

function StatusOnlineOrder({data}: {data: OrderDetails} ) {

  const [deliveryStatus, setDeliveryStatus] = useState(0);
  const [statusSummaryPackaging, setStatusSummaryPackaging] = useState("");
  const [statusSummaryShipping, setStatusSummaryShipping] = useState("");
  const [statusSummaryDelivering, setStatusSummaryDelivering] = useState("");

  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setDeliveryStatus(data?.delivery_status);
  }, [data]);

  
  useEffect(() => {
    setStatusSummaryPackaging(statusSummary(1));
    setStatusSummaryShipping(statusSummary(2));
    setStatusSummaryDelivering(statusSummary(3));
  }, [deliveryStatus]);

  const { statusSummary,
    orderNextStage
  } = Logic({
    deliveryStatus,
    setDeliveryStatus,
    setDisable
  });

  return (
    <OrderStatusContainer>
      <h3>Order Status</h3>

      <OrderStatus className={statusSummaryPackaging}>
      <i className="fa-solid fa-boxes-stacked i"></i>
      <OrderStatusInfo status={statusSummaryPackaging}>
        <span>
          Order Packed{" "}
          <i className={`fa-solid fa-circle-check i ${statusSummaryPackaging}`}></i>
        </span>
        <small>{statusSummaryPackaging === 'active' || statusSummaryPackaging === 'notActive'  ? 'Order is being prepared' : 'Order has been packed, ready to dispatch.'}</small>
      </OrderStatusInfo>
    </OrderStatus>

      <OrderStatus className={statusSummaryShipping}>
      <i className="fa-solid fa-truck-fast i"></i>
      <OrderStatusInfo  status={statusSummaryShipping}>
        <span>
          Order Dispatched{" "}
          
          <i className={`fa-solid fa-circle-check i ${statusSummaryShipping}`}></i>
        </span>
        <small>{statusSummaryShipping === 'active' || statusSummaryShipping === 'notActive'  ? 'Preparing to dispatch' : 'Order has been dispatched.'}</small>

      </OrderStatusInfo>
    </OrderStatus>

      <OrderStatus className={statusSummaryDelivering}>
      <i className="fa-solid fa-truck-ramp-box  i"></i>
      <OrderStatusInfo  status={statusSummaryDelivering}>
        <span>
          Order Delivered{" "}
          <i
            className={`fa-solid fa-circle-check i ${statusSummaryDelivering}`}
          ></i>
        </span>
        <small> {statusSummaryDelivering === 'active' || statusSummaryDelivering === 'notActive'  ? 'Order is in shipping process' : 'Order Has been delivered, order has been delivered.'} </small>
      </OrderStatusInfo>
    </OrderStatus>
      
    {data?.id ? (
        <>
          {data?.order_status !== "cancelled" && deliveryStatus !== -1 ? (
            <ButtonStatusContainer>
            <button 
             onClick={() => orderNextStage(data?.id)} 
             disabled={deliveryStatus >= 4 || disable}
             >
              {deliveryStatus >= 4 ? "Order completed" : "Next Stage"}
            </button>
            
            </ButtonStatusContainer>
          ) : (
            <ButtonStatusContainer>
            <button disabled={deliveryStatus === -1}>
              {"Order cancelled"}
            </button>
            </ButtonStatusContainer>
            
          )}
        </>
      ) : (
        <> </>
      )}
    </OrderStatusContainer>
  )
}

export default StatusOnlineOrder