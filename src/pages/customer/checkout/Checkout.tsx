import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import CartSection from '../../../components/checkout/CartSection'
import PaymentSection from '../../../components/checkout/PaymentSection'
import { CheckoutContainer, GlobalStyles, ShoppingCart } from './components'

function Checkout() {

    const navigate = useNavigate()
    return <CheckoutContainer>
        <FontAwesomeIcon icon={faArrowLeft} className="backBtn" onClick={() => navigate('/customer/store')} />
        <GlobalStyles />
        <h1><i className="fa-solid fa-cart-shopping"></i> Checkout </h1>
        <ShoppingCart>
            <CartSection />
            <PaymentSection />
        </ShoppingCart>
    </CheckoutContainer>
}

export default Checkout