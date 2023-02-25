import React from "react";
import { TableRow, Col } from "./components";
import ProductPriceFormmater from "../../helpers/ProductPriceFormatter";
import { useNavigate } from "react-router-dom";
import { OrderDetails } from "../../model";
import DateTimeFormmater from '../../helpers/DateTimeFormatter'
import { useGetCurrentUser } from "../../services";
function Data({ order }: { order: OrderDetails }) {
  const { dateAndTimeParser } = DateTimeFormmater()
  const navigate = useNavigate();
  const { time, date } = dateAndTimeParser(order.createdAt + '')

  const { data: user } = useGetCurrentUser()
  const handleNavigate = () => {
    if (order?.transaction_type === 'ONLINE') {
      navigate(`/${user?.role.toLocaleLowerCase()}/orders/online/${order.order_id}`)
    }
    else {
      navigate(`/${user?.role.toLocaleLowerCase()}/orders/walk-in/${order.order_id}`)
    }
  }
  return (
    <TableRow className="data" onClick={handleNavigate}>
      <Col className="id">{order.order_id}</Col>
      {/* <Col className="customer">
        {order.user.profile.firstname} {order.user.profile.lastname}
      </Col> */}
      <Col className="date">
        {date} at {time}{" "}
      </Col>
      <Col className="price">{ProductPriceFormmater(order.totalAmount + '')}</Col>
      {order.order_status === "completed" && (
        <Col className={`status status__complete order__status`}>
          {" "}
          Completed{" "}
        </Col>
      )}

      {order.order_status === "pending" && (
        <Col className={`status status__pending order__status`}> Pending </Col>
      )}

      {order.order_status === "onGoing" && (
        <Col className={`status status__onGoing order__status`}> On Going </Col>
      )}

      {order.order_status === "cancelled" && (
        <Col className={`status status__cancelled order__status`}>
          {" "}
          Cancelled{" "}
        </Col>
      )}
      <Col className="payment__method">{order.paymentMethod} Payment</Col>

    </TableRow>
  );
}

export default Data;