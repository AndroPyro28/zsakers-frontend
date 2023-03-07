import React from 'react'
import { useGetOrderByOrderIdQuery } from '../../../../services';
import { HistoryOrderContainer, HistoryOrderBackdrop } from './components'

interface Props {
    orderId: number
    setOrderId: React.Dispatch<React.SetStateAction<number>>
}

function Order({ orderId }: Props) {

    const { data, isLoading } = useGetOrderByOrderIdQuery(orderId + '');

    let content;

    if(isLoading) content = <h2>Loading...</h2>

    else content = <>
        
    </>
    return (

        <HistoryOrderBackdrop>
            <HistoryOrderContainer>
                {content}
            </HistoryOrderContainer>
        </HistoryOrderBackdrop>

    )
}

export default Order