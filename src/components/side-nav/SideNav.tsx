import React from 'react'
import {SideNavModal, MenuList} from './components'
import {NavLink} from 'react-router-dom'

interface Props {
  setShowDropDown:React.Dispatch<React.SetStateAction<boolean>>,
  routes: {url: string, name: string}[]
}
function SideNav({setShowDropDown, routes}: Props) {

    const navLinkStyles = ({ isActive }: any) => {
        return {
          textDecoration: isActive ? "none" : "",
          background: isActive ? "rgb(20,29,53)" : "",
          color: isActive ? "white" : "rgb(20,29,53)",
        };
      };

  return (
    <SideNavModal onClick={() => setShowDropDown(false)}>
        <MenuList>
          {
            routes.map((route: any) => <NavLink to={route.url}>
              {route.name}
            </NavLink>)
          }
        </MenuList>
    </SideNavModal>
  )
}

export default SideNav