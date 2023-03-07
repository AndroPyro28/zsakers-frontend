import React from 'react'
import { useNavigate } from 'react-router-dom'
import DateTimeFormatter from '../../../helpers/DateTimeFormatter'
import productPriceFormatter from '../../../helpers/ProductPriceFormatter'
import { OrderDetails } from '../../../model'
import { ActivitiesContainer, Activity, RowInfoHistory } from './components'
interface Props {
  data: OrderDetails
}
function HistoryData({data}:Props) {
  const { dateAndTimeParser } = DateTimeFormatter()
  const { date, time } = dateAndTimeParser(data?.createdAt + '') 
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/customer/purchase-details/${data?.order_id}`, {replace: true})
  }
  return (
    <ActivitiesContainer onClick={handleClick}>
      <RowInfoHistory >
          <Activity status={data?.order_status}>
            <span className="date">
              {date} at {time}
            </span>
          </Activity>

          <Activity status={data.order_status}>
            <span className="payment">Paid by: {data?.paymentMethod}</span>
          </Activity>

          <Activity status={data?.order_status}>
            <span className="service">
              Amount:{" "}
              {productPriceFormatter(data?.totalAmount + '')}
            </span>
          </Activity>

          <Activity status={data?.order_status}>
            <span className="status">{data?.order_status + ''}</span>
          </Activity>
        </RowInfoHistory>
    </ActivitiesContainer>
  )
}

export default HistoryData