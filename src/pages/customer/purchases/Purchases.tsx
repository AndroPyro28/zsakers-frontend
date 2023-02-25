import { NavLink, Outlet } from 'react-router-dom'
import {PurchasesContainer, LinksContainer} from "./components"
function Purchases() {

  const navLinkStyles = ({ isActive }: any) => {
    return {
      borderBottom: isActive ? "solid 2px rgb(141, 124, 87)" : "",
    };
  };
  return (
    <PurchasesContainer>
        <LinksContainer>
        <NavLink style={navLinkStyles} to={'preparing'}>Preparing</NavLink>
        <NavLink style={navLinkStyles} to={'to-receive'}>To Receive</NavLink>
        </LinksContainer>
        <Outlet />
    </PurchasesContainer>
  )
}

export default Purchases