import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CancelButton, Info, Order, Row, ViewButton } from './components'
import { useNavigate } from 'react-router-dom';
import { OrderDetails } from '../../model';
import { useCancelOrderMutation } from '../../app/services';
import { useState } from 'react';
import CancelOrderModal from '../modals/customer/cancel-order/CancelOrderModal';
import DateTimeFormatter from '../../helpers/DateTimeFormatter';

interface Props {
  data: OrderDetails
}
function PreparingOrder({ data }: Props) {
  const navigate = useNavigate()

  const [toggleCancel, setToggleCancel] = useState(false);

  const { dateAndTimeParser } = DateTimeFormatter()

  const { time, date } = dateAndTimeParser(data?.createdAt + '')

  return (
    <Order>
      {
        toggleCancel && <CancelOrderModal setToggleCancel={setToggleCancel} id={data.id} />
      }
      <img src={data?.cart_product[0]?.product?.image_url} />
      <Info>
        <Row>
          <h1>
            Order <span># {data?.order_id}</span>
          </h1>
        </Row>
        <Row>
          <h4>Total amount of {productPriceFormatter(data?.totalAmount + '')}</h4>
        </Row>

        <Row>
          <h4>
            <i className="fa-solid fa-clock"></i>&nbsp;{" "}
            {date} at {time}
          </h4>
        </Row>

        <Row>
          <h3>
            <i className="fa-solid fa-basket-shopping"></i>&nbsp;{" "}
            {data?.cart_product?.length} items
          </h3>
        </Row>
        <Row>
          <small style={{ textTransform: "capitalize" }}>
            <i className="fa-solid fa-credit-card"></i> &nbsp; {data?.paymentMethod} Payment
          </small>
        </Row>
        <Row>
          <ViewButton className=""
            onClick={() => navigate(`/customer/purchase-details/${data.order_id}`)}
          >
            View Order
          </ViewButton>
          {
            data.paymentMethod !== 'gcash' && data?.delivery_status < 1 && <CancelButton className=""
              onClick={() => setToggleCancel(true)}
            >
              Cancel Order
            </CancelButton>
          }

        </Row>
      </Info>
    </Order>
  )
}

export default PreparingOrder