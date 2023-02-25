import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import Loader from '../components/loader/Loader'
import { useGetCurrentUser } from '../services'

import { AdminGlobalStyles, AdminRoutesContainer } from './components'

function AdminRoutes() {
  const {data:user, isLoading, isError} = useGetCurrentUser()


  if(isLoading) {
    return <Loader />
  }
  if(!user || isError) return <Navigate to="/login" />
  
  if(user.role === 'CUSTOMER') return <Navigate to={'/customer'} />

  if(user.role === 'STAFF') return <Navigate to={'/staff'} />
  

  return (
    <AdminRoutesContainer>
        <AdminNavbar />
        <AdminGlobalStyles />
        <Outlet />
    </AdminRoutesContainer>
  )
}

export default AdminRoutes