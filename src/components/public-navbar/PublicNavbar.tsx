import { PublicNavbarContainer, Links, DropdownContent } from "./components";
import { NavLink, useLocation } from "react-router-dom";
import Logic from "./Logic";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useState } from "react";
import SideNav from "../side-nav/SideNav";

function PublicNavbar() {
  const { navLinkStylesFirst, navLinkStyles } = Logic();
  const [showDropDown, setShowDropDown] = useState(false);

  const routes = [
    {
      url:`/`,
      name:"Home",
    //   icon:'fa-solid fa-chart-line'
    },
    {
      url:`/about`,
      name:"About",
    //   icon:'fa-solid fa-calendar-days'
    },
    {
      url:`/login`,
      name:"Login",
    //   icon:'fa-solid fa-chart-pie'
    },
    
]

  return (
    <PublicNavbarContainer>
      <img src="/assets/logo.jpg" />
      <Links>
        <NavLink to={"/"} defaultChecked style={navLinkStylesFirst}>
          Home
        </NavLink>

        <NavLink to={"/about"} style={navLinkStyles}>
          About
        </NavLink>

      </Links>
      <Links>
        <NavLink to={"/login"}>login</NavLink>
      </Links>

      <FontAwesomeIcon icon={faBars} className="hambuger__nav" onClick={() => setShowDropDown(prev => !prev)}/>
     
     {showDropDown && <SideNav setShowDropDown={setShowDropDown} routes={routes}/>} 

    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
