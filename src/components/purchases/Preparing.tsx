import React from 'react'
import { useGetOrdersByCustomerQuery } from '../../app/services';
import { GlobalStyles, OrderContainer } from './components';
import PreparingOrder from './PreparingOrder';

function Preparing() {

  const {data: orders, isLoading, isError } = useGetOrdersByCustomerQuery('preparing')

  let content;

  if(isLoading) content = <h1>loading...</h1>
  if(isError) content = <h1>Something went wrong...</h1>

  if(orders?.length === 0) content = <h1>No orders found</h1>
  else content = orders?.map((order) => {
    return (
      <PreparingOrder key={order.id} data={order} />
    );
  })
  return (
    <OrderContainer>
    <GlobalStyles />
    { content }
  </OrderContainer>
  )
}

export default Preparing