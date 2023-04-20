import { NavLink } from 'react-router-dom'
import { useGetCurrentUser } from '../../app/services'
import { Photo, PhotoBorder } from '../customer-navbar/components'
import {AdminNavbarContainer, AdminLinks, UserProfile, DropDown, DropdownContent} from "../admin-navbar/components"
import { useDispatch } from 'react-redux'
import { logout } from '../../app/features'
import { useState } from 'react'
function StaffNavbar() {

  const {data: user} = useGetCurrentUser()
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  const [toggleDropDown, setToggleDropdown] = useState(false)
  return (
    <AdminNavbarContainer>
        <AdminLinks>
            {/* <NavLink to={''}>
            <i className="fa-solid fa-chart-line"></i> Dashboard
            </NavLink> */}
            {/* <NavLink to={'inventory'}>
            <i className="fa-solid fa-cart-flatbed"></i> Inventory
            </NavLink> */}
            <NavLink to={'sales'}>
            <i className="fa-solid fa-chart-pie"></i> Sales
            </NavLink>
            <NavLink to={'orders'}>
            <i className="fa-solid fa-truck-fast"></i> Orders
            </NavLink>
            <NavLink to={'pos'}>
            <i className="fa-solid fa-cash-register"></i> Pos
            </NavLink>
        </AdminLinks>
        <UserProfile>
          <PhotoBorder>
            <Photo src="/assets/arthur estrada profile.jpg" alt="" />
          </PhotoBorder>
          <span className='user-firstname'>{user?.profile.firstname}</span>
          <DropDown>
            <div onClick={() => setToggleDropdown(prev => !prev)}>
            <i className="fa-solid fa-chevron-down i"></i>
            </div>

        {
          toggleDropDown && <DropdownContent>
          <NavLink to={'password'}>
            Password
          </NavLink>
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </DropdownContent>
        }
            
          </DropDown>
        </UserProfile>
    </AdminNavbarContainer>
  )
}

export default StaffNavbar