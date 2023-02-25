import { PublicNavbarContainer, Links, DropdownContent } from "./components";
import { NavLink, useLocation } from "react-router-dom";
import Logic from "./Logic";
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
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
