import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import Loader from '../components/loader/Loader'
import { useGetCurrentUser } from '../app/services'

import { AdminGlobalStyles, AdminRoutesContainer } from './components'

 type RoutePropTypes = {
    Component: React.ComponentType
}

const SuperAdminRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  const {data:user, isLoading, isError} = useGetCurrentUser()
  if(isLoading) {
    return <Loader />
}

  if(user?.role == 'ADMIN' && Boolean(user?.super_admin)) return <Component />

  else {
    return <Navigate to={'/admin/employees/staff'}  />
  }
}


export default SuperAdminRoutes;