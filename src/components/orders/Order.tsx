import React from "react";
import { TableRowData, T_Data } from "../../pages/admin/orders/components";
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { useNavigate } from 'react-router-dom';
import DateTimeFormatter from "../../helpers/DateTimeFormatter"
import { OrderDetails } from "../../model";
import { useGetCurrentUser } from "../../services";

interface Props {
  data: OrderDetails
}
function Order({ data }: Props) {

  const navigate = useNavigate()

  const { dateAndTimeParser } = DateTimeFormatter()
  const { time, date } = dateAndTimeParser(data.createdAt + '')

  const {data: user} = useGetCurrentUser()

  const handleNavigate = () => {
    if(data?.transaction_type === 'ONLINE')
     {
       navigate(`/${user?.role.toLocaleLowerCase()}/orders/online/${data.order_id}`)
     }
     else {
      navigate(`/${user?.role.toLocaleLowerCase()}/orders/walk-in/${data.order_id}`)
    }
  }
  
  return (
    <TableRowData onClick={handleNavigate}>
      <T_Data className="id" > {data?.order_id}</T_Data>
      <T_Data className="customer" > {data?.user.profile.firstname} {data?.user.profile.lastname}</T_Data>
      <T_Data className="date" > {date} {time} </T_Data>
      <T_Data className="price  "> {productPriceFormatter('' + data.totalAmount)} </T_Data>

      {
       data?.transaction_type === 'ONLINE' && data?.order_status === 'completed' && <T_Data className={`status status__complete order__status`}> Completed </T_Data>
      }

      {
       data?.transaction_type === 'ONLINE' && data?.order_status === 'pending' && <T_Data className={`status status__pending order__status`}> Pending </T_Data>
      }

      {
       data?.transaction_type === 'ONLINE' && data?.order_status === 'onGoing' && <T_Data className={`status status__onGoing order__status`}> On Going </T_Data>
      }

      {
       data?.transaction_type === 'ONLINE' && data?.order_status === 'cancelled' && <T_Data className={`status status__cancelled order__status`}> Cancelled </T_Data>
      }

      <T_Data style={{ textTransform: 'capitalize' }} className="payment__method">{data?.paymentMethod} Payment </T_Data>
    </TableRowData>
  );
}

export default Order;