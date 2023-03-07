import { NavLink } from 'react-router-dom'
import { useGetCurrentUser } from '../../services'
import { Photo, PhotoBorder } from '../customer-navbar/components'
import {AdminNavbarContainer, AdminLinks, UserProfile, DropDown, DropdownContent} from "./components"
import { useDispatch } from 'react-redux'
import { logout } from '../../features'
import { useState } from 'react'
import SideNav from '../side-nav/SideNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function AdminNavbar() {

  const {data: user} = useGetCurrentUser()
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  const [toggleDropDown, setToggleDropdown] = useState(false)

  const routes = [
    {
      url:`/admin/inventory`,
      name:"Inventory",
    //   icon:'fa-solid fa-calendar-days'
    },
    {
      url:`/admin/pos`,
      name:"Pos",
    //   icon:'fa-solid fa-chart-line'
    },
    {
      url:`/admin/sales`,
      name:"Sales",
    //   icon:'fa-solid fa-chart-pie'
    },
    {
      url:`/admin/orders`,
      name:"Orders",
    //   icon:'fa-solid fa-chart-pie'
    },

    {
      url:`/admin/employees`,
      name:"Employees",
    //   icon:'fa-solid fa-chart-pie'
    },

    
]

const [showDropDown, setShowDropDown] = useState(false);

  return (
    <AdminNavbarContainer>

      <FontAwesomeIcon icon={faBars} className="hamburger__nav" onClick={() => setShowDropDown(prev => !prev)}/>

      {
        showDropDown && <SideNav setShowDropDown={setShowDropDown} routes={routes}/>
      }

        <AdminLinks>
            {/* <NavLink to={''}>
            <i className="fa-solid fa-chart-line"></i> Dashboard
            </NavLink> */}
            <NavLink to={'inventory'}>
            <i className="fa-solid fa-cart-flatbed"></i> Inventory
            </NavLink>
            <NavLink to={'pos'}>
            <i className="fa-solid fa-cash-register"></i> Pos
            </NavLink>
            <NavLink to={'sales'}>
            <i className="fa-solid fa-chart-pie"></i> Sales
            </NavLink>
            <NavLink to={'orders'}>
            <i className="fa-solid fa-truck-fast"></i> Orders
            </NavLink>
            <NavLink to={'employees'}>
            <i className="fa-solid fa-users"></i> Employees
            </NavLink>
        </AdminLinks>
        <UserProfile>
          <PhotoBorder>
            <Photo src="/assets/defaultProfile.jpg" alt="" />
          </PhotoBorder>
          <span className='user-firstname'>{user?.profile.firstname}</span>
          <DropDown>
            <div onClick={() => setToggleDropdown(prev => !prev)}>
            <i className="fa-solid fa-chevron-down i"></i>
            </div>

        {
          toggleDropDown && <DropdownContent>
          {/* <NavLink to={'profile'}>
            Profile
          </NavLink> */}
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

export default AdminNavbar