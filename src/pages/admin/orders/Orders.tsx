import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Order from "../../../components/orders/Order";
import { useGetOrdersByAdminQuery } from "../../../services";
import { LinksContainer } from "../../customer/purchases/components";
import {
  OrderDetailsContainer,
  OrderDetailsList,
  SearchBarWrapper,
  SearchBarContainer,
  GlobalStyles,
  NavigationLinks,
} from "./components";

type orderStatus = 'pending' | 'onGoing' | 'completed' | 'cancelled' | 'all'


function Orders() {

  const { pathname } = useLocation()
  const [search, setSearch] = useState('')

  const [orderStatus, setOrderStatus] = useState<orderStatus>('all');

  const isActiveLink = ({ isActive }: any) => {
    return {
      color: isActive ? 'rgb(24,41,62)' : 'gray',
      borderBottom: isActive ? 'solid 2px rgb(24,41,62)' : 'solid 2px transparent',
      fontWeight: isActive ? '1000' : '100'
    }
  }

  return (
    <OrderDetailsContainer>
      <GlobalStyles />
      <h3>{pathname.includes('orders/online') ? 'Online' : 'Walkin'} Orders</h3>

      <p>
        Welcome! Tracking customer order allows you to manage
        and serve all the pending orders in the system.
      </p>

      <NavigationLinks>
        <NavLink to={'online'} style={isActiveLink}>Online Orders</NavLink>
        <NavLink to={'walk-in'} style={isActiveLink}>Walkin Orders</NavLink>
      </NavigationLinks>

      <OrderDetailsList>
        <SearchBarWrapper>
          <SearchBarContainer>
            <i className="fa-solid fa-magnifying-glass i"></i>
            <input
              type="text"
              placeholder="Search for Order ID"
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchBarContainer>
          {pathname.includes('orders/online') && <select
            className="select"
            onChange={(e) => setOrderStatus(e.target.value as orderStatus)}
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="onGoing">On Going</option>
          </select>}

        </SearchBarWrapper>

        <Outlet
          context={{ search, orderStatus }}
        />

      </OrderDetailsList>
    </OrderDetailsContainer>
  )
}

export default Orders