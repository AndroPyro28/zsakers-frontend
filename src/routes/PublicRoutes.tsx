import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import PublicNavbar from '../components/public-navbar/PublicNavbar'
import { useGetCurrentUser } from '../services'
import { PublicRoutesContainer } from './components'
import {excluded} from "./excluded"
function PublicRoutes() {

  const {pathname} = useLocation()
  const {data:user, isLoading, isError} = useGetCurrentUser()

    if(isLoading) return <Loader></Loader>

    // if(!user || isError) return <Navigate to="/login" />

    if(user?.role === 'ADMIN') return <Navigate to={'/admin'} />
    
    if(user?.role === 'CUSTOMER') return <Navigate to={'/customer'} />
    
    if(user?.role === 'STAFF') return <Navigate to={'/staff'} />
  return (
    <PublicRoutesContainer>
      {
        !excluded.some(path => pathname.includes(path)) && <PublicNavbar />
      }
      <Outlet />
    </PublicRoutesContainer>
  )
}

export default PublicRoutes