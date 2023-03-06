import React from 'react'
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
  return (
    <ActivitiesContainer>
      <RowInfoHistory >
          <Activity status={data?.order_status}>
            <span className="date">
              {}
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