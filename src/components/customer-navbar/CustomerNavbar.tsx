import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useGetCartProducts } from '../../services/cart-products'
import CartPopup from '../cart-popup/CartPopup'
import { DropdownContent } from '../public-navbar/components'
import { Cart, CustomerLinks, CustomerNavbarContainer, Photo, PhotoBorder, User, UserProfile } from './components'
import { logout } from '../../features'
import { useDispatch } from 'react-redux'
import { DropDown } from '../admin-navbar/components'
function CustomerNavbar() {

    const [openCart, setOpenCart] = useState(false)
  const dispatch = useDispatch()
    const {pathname} = useLocation()
    const handleLogout = () => dispatch(logout())
    const [toggleDropDown, setToggleDropdown] = useState(false)
  
  const { data: cartProducts } = useGetCartProducts();
    

    return (
        <CustomerNavbarContainer url={pathname}>
            <CustomerLinks>
                <NavLink to={''}> <i className="fa-solid fa-house"></i> Home</NavLink>
                <NavLink to={'store'}><i className="fa-solid fa-store"></i> Store</NavLink>
                <NavLink to={'purchases'}><i className="fa-solid fa-bag-shopping"></i> Purchases</NavLink>
            </CustomerLinks>
            <UserProfile>
                <Cart onClick={() => setOpenCart(prev => !prev)}>
                    <i className="fa-solid fa-cart-shopping carticon"></i> 
                    <span className='title'>Cart</span> 
                    <span className='cart__number'>{cartProducts?.length}</span>
                </Cart>
                    {
                        openCart &&  <CartPopup  /> 
                    }

                <User>
                <PhotoBorder>
                    <Photo src="/assets/arthur estrada profile.jpg" />
                </PhotoBorder>
                <DropDown>
                <div onClick={() => setToggleDropdown(prev => !prev)}>
                <i className="fa-solid fa-chevron-down i"></i>
                </div>

                    {
                    toggleDropDown && <DropdownContent style={{
                        marginLeft: '-50px'
                    }}>
                    {/* <NavLink to={'profile'}>
                        Profile
                    </NavLink> */}
                    <a href="#" onClick={handleLogout}>
                        Logout
                    </a>
                    </DropdownContent>
                    }
            
          </DropDown>
            </User>
            </UserProfile>
        </CustomerNavbarContainer>
    )
}

export default CustomerNavbar