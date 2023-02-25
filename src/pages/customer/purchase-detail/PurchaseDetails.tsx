import React from 'react'
import OrderDetails from '../../../components/purchase-details/OrderDetails'
import { ItemListContainer, PurchasedItemContainer } from './components'
import { useParams } from 'react-router-dom'
import { useGetOrderByOrderIdQuery } from '../../../services';
import Item from '../../../components/purchase-details/Item';
function PurchaseDetails() {

    const { order_id } = useParams();
    const { data: order, isLoading, isError } = useGetOrderByOrderIdQuery(order_id!);

    let content;

    if (isLoading) content = <h2>loading...</h2>
    if (isError) content = <h2>Something went wrong...</h2>

    if (!order) content = <h2>Order not found</h2>
    else content = <>
        <ItemListContainer>
            <h1>Your Ordered Products</h1>
            {
                order?.cart_product?.map(cartProduct => (
                    <Item data={cartProduct} key={cartProduct.id} />
                ))
            }
        </ItemListContainer>

        <OrderDetails
            data={order}
        />
    </>
    return (
        <PurchasedItemContainer>

            {content}

        </PurchasedItemContainer>
    )
}

export default PurchaseDetails