import { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCartProducts } from '../../features';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model';
import { useGetCartProducts } from '../../services/cart-products';
import CheckoutModal from '../modals/customer/checkout/CheckoutModal';
import { Payment, Payments, PaymentSectionContainer, PaymentType, Title, SummaryContainer, Summary, ChekoutButton } from './components'

function PaymentSection() {

  const [paymentType, setPaymentType] = useState<string>('gcash')
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const{data: cartProducts, isLoading} = useGetCartProducts();

  const selectPayment = (payment: string) => setPaymentType(payment);

  const checkoutCartProducts: CartProduct[] = useSelector(getCartProducts)
  
  const total = checkoutCartProducts.reduce((total, cartProduct) => {
      const cartProductFound = cartProducts?.find((cart) => cart .id == cartProduct.id );
      return total + cartProductFound!.quantity * cartProductFound!.product.price;
    }, 0)

  const handleClick = () => {
    if(checkoutCartProducts.length <= 0 ) {
      return toast('please checkout a product first', {type: 'info'})
    }
    setOpenCheckoutModal(true)
  } 


  return (
    <PaymentSectionContainer>
      {
        openCheckoutModal && <CheckoutModal paymentType={paymentType} totalAmount={total} setOpenCheckoutModal={setOpenCheckoutModal}/>
      }
      <Title>
        Payment
      </Title>

      <PaymentType>
        <h3>Choose your prefered payment method</h3>

        <Payments>
          <Payment onClick={() => selectPayment('gcash')} isSelected={paymentType === 'gcash'}>
              <img src="/assets/gcash.png" alt="" />
          </Payment>

          <Payment onClick={() => selectPayment('cod')} isSelected={paymentType === 'cod'}>
          <img src="/assets/cod.jpg" alt="" />
          </Payment>
        </Payments>
      </PaymentType>

      <SummaryContainer>
        <Summary>
          <span>Subtotal</span>
          <span>{productPriceFormatter('' + total)}</span>
        </Summary>

        <Summary>
          <span>Shipping</span>
          <span>{productPriceFormatter('' + 40)}</span>
        </Summary>

        <Summary>
          <span>Total</span>
          <span>{productPriceFormatter('' + (40 + total))}</span>
        </Summary>
      </SummaryContainer>

      <ChekoutButton onClick={handleClick}>
        <span className='total'> {productPriceFormatter('' + (40 + total))} </span>
        <span className='title'>Checkout by {paymentType} <i className="fa-solid fa-arrow-right"></i></span>
      </ChekoutButton>
    </PaymentSectionContainer>
  )
}

export default PaymentSection