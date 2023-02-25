import { Navigate, Outlet } from 'react-router-dom'
import store from '../app/store'
import CustomerNavbar from '../components/customer-navbar/CustomerNavbar'
import Loader from '../components/loader/Loader'
import { useGetCurrentUser } from '../services'
import cartProduct from '../services/cart-products'
import { CustomerRoutesContainer } from './components'

function CustomerRoutes() {
    const {data:user, isLoading, isError} = useGetCurrentUser()

    store.dispatch(cartProduct.endpoints.getCartProducts.initiate());

    if(isLoading) return <Loader/>

    if(!user || isError) return <Navigate to="/login" />
    
    if(user.role === 'ADMIN') return <Navigate to={'/admin'} />
    
    if(user.role === 'STAFF') return <Navigate to={'/staff'} />
    
  return (
    <CustomerRoutesContainer>
        <CustomerNavbar />
        <Outlet />
    </CustomerRoutesContainer>
  )
}

export default CustomerRoutes