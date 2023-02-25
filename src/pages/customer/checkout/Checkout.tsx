import CartSection from '../../../components/checkout/CartSection'
import PaymentSection from '../../../components/checkout/PaymentSection'
import { CheckoutContainer, GlobalStyles, ShoppingCart } from './components'

function Checkout() {
    return <CheckoutContainer>
        <i className="fa-solid fa-arrow-left backBtn"></i>
        <GlobalStyles />
        <h1><i className="fa-solid fa-cart-shopping"></i> Checkout </h1>
        <ShoppingCart>
            <CartSection />
            <PaymentSection />
        </ShoppingCart>
    </CheckoutContainer>
}

export default Checkout