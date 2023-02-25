import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Order from '../../../components/orders/Order';
import { orderStatus } from '../../../model';
import { useGetOrdersByAdminQuery } from '../../../services';
import {
    TableContainer, TableRowHeader,
    T_Head as Thead,
} from './components';

function Walkin() {
    
    const { search, orderStatus,  } = useOutletContext<{search: string, orderStatus: orderStatus}> ();
    const { data: orders, refetch, isLoading, error } = useGetOrdersByAdminQuery({
        search,
        order_status: orderStatus,
        transaction_type: 'WALK_IN'
    });

    useEffect(() => {
        refetch()
    }, [search, orderStatus])

    let orderContent;

    if (isLoading) {
        orderContent = <h3>loading...</h3>
    }
    else {
        orderContent = orders?.length === 0 ? <h3>No orders found</h3> : orders?.map((order) => <Order data={order} key={order.id} />)
    }

    return (
        <TableContainer>
            <TableRowHeader>
                <Thead className="id"> Order ID </Thead>
                <Thead className="customer"> Cashier </Thead>
                <Thead className="date"> Date </Thead>
                <Thead className="price"> Price </Thead>
                <Thead className="payment__method"> Payment Method</Thead>
            </TableRowHeader>

            {orderContent}

        </TableContainer>
    )
}

export default Walkin