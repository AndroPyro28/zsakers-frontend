import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import StaffNavbar from '../components/staff-navbar/StaffNavbar'
import { useGetCurrentUser } from '../services'
import {StaffRoutesContainer} from './components'

function StaffRoutes() {

    const {data:user, isLoading, isError} = useGetCurrentUser()
    const excluded = ['/staff/password']
    const {pathname} = useLocation()

    if(isLoading) return <Loader></Loader>

    if(!user || isError) return <Navigate to="/login" />

    if(user.role === 'ADMIN') return <Navigate to={'/admin'} />
    
    if(user.role === 'CUSTOMER') return <Navigate to={'/customer'} />
    
    return(
        <StaffRoutesContainer>

      {
        !excluded.some(path => pathname.includes(path)) && <StaffNavbar />
      }
          
          <Outlet />
        </StaffRoutesContainer>
    )
}

export default StaffRoutes