import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import Loader from '../components/loader/Loader'
import { useGetCurrentUser } from '../app/services'

import { AdminGlobalStyles, AdminRoutesContainer } from './components'
import SuperAdminRoutes from './SuperAdminRoutes'

function AdminRoutes() {
  const {data:user, isLoading, isError} = useGetCurrentUser()

    const {pathname} = useLocation()
    const excluded = ['/admin/password', '/admin/sales/report/']

  if(isLoading) {
    return <Loader />
  }
  if(!user || isError) return <Navigate to="/login" />
  
  if(user.role === 'CUSTOMER') return <Navigate to={'/customer'} />

  if(user.role === 'STAFF') return <Navigate to={'/staff'} />
  

  return (
    <AdminRoutesContainer>
      {
        !excluded.some(path => pathname.includes(path)) && <AdminNavbar />
      }
        <AdminGlobalStyles />
        <Outlet />
    </AdminRoutesContainer>
  )
}

export default AdminRoutes