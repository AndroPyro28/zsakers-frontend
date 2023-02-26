import { PublicNavbarContainer, Links, DropdownContent } from "./components";
import { NavLink, useLocation } from "react-router-dom";
import Logic from "./Logic";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useState } from "react";

function PublicNavbar() {
  const { navLinkStylesFirst, navLinkStyles } = Logic();
  const [showDropDown, setShowDropDown] = useState(false);

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

        {/* <NavLink to={"/products"} style={navLinkStyles}>
          Products
        </NavLink> */}
      </Links>
      <Links>
        <NavLink to={"/login"}>login</NavLink>
      </Links>

      <FontAwesomeIcon icon={faBars} className="hambuger__nav" onClick={() => setShowDropDown(prev => !prev)}/>
      <DropdownContent>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/about'} >About</NavLink>
        <NavLink to={'/login'} >Login</NavLink>
      </DropdownContent>
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
