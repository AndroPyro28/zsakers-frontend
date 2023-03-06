import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import StaffNavbar from '../components/staff-navbar/StaffNavbar'
import { useGetCurrentUser } from '../services'
import { useAuthUpdatePasswordPageQuery } from '../services/update-password'
import {StaffRoutesContainer, UpdatePasswordRoutesContainer} from './components'

function UpdatePasswordRoutes() {

    const {data:user, isLoading, isError} = useAuthUpdatePasswordPageQuery()

    if(isLoading) return <Loader></Loader>

    if(!user || isError) return <Navigate to="/forgot-password" />

    return(
        <UpdatePasswordRoutesContainer>
          <Outlet />
        </UpdatePasswordRoutesContainer>
    )
}

export default UpdatePasswordRoutes