import React, { useEffect, useState } from 'react'
import { OrderDetails } from '../../model';
import { ButtonStatusContainer, OrderStatus, OrderStatusContainer, OrderStatusInfo } from '../../pages/admin/order_details/components'
import { useCancelOrderMutation } from '../../app/services';
import Logic from './Logic';

function Status({ data }: { data: OrderDetails }) {

  const [deliveryStatus, setDeliveryStatus] = useState(0);
  const [statusSummaryPackaging, setStatusSummaryPackaging] = useState("");
  const [statusSummaryShipping, setStatusSummaryShipping] = useState("");
  const [statusSummaryDelivering, setStatusSummaryDelivering] = useState("");
  const [disableButton, setDisableButton ] = useState(false)
  const [cancelOrderMutation] = useCancelOrderMutation()

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
  });

  const cancelOrder = async () => {
    setDisableButton(true)
    const result = await cancelOrderMutation({
        id: data?.id,
        reason: 'Walkin order cancelled'
      })
  }

  return (
    <OrderStatusContainer>
      <h3>Order Status</h3>


      <OrderStatus className={statusSummaryDelivering}>
        <i className="fa-solid fa-truck-ramp-box  i"></i>
        <OrderStatusInfo status={statusSummaryDelivering}>
          <span>
            Order Completed{" "}
            <i
              className={`fa-solid fa-circle-check i ${statusSummaryDelivering}`}
            ></i>
          </span>
          <small> {statusSummaryDelivering === 'active' || statusSummaryDelivering === 'notActive' ? 'Order is being prepared' : 'Order Completed'} </small>

        </OrderStatusInfo>
      </OrderStatus>

      {data?.id ? (
        <>
          {data?.order_status !== "cancelled" && deliveryStatus !== -1 ? (
            <ButtonStatusContainer>
              <button

                onClick={() => orderNextStage(data?.id)} disabled={deliveryStatus >= 4}
              >
                {deliveryStatus >= 4 ? "Order completed" : "Next Stage"}
              </button>
              {
                data?.order_status !== 'completed' && 
                deliveryStatus < 4 && 
                <button className='cancel__order__btn' onClick={cancelOrder} disabled={disableButton}>
                  Cancel order
                </button>
              }
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

export default Status