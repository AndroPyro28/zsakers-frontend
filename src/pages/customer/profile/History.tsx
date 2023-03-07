import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Order from '../../../components/modals/customer/order-history/Order';
import { useGetOrdersByCustomerQuery } from '../../../services'
import { Pagination, UserActivities } from './components'
import HistoryData from './HistoryData';

function History() {

    const { data, isLoading } = useGetOrdersByCustomerQuery('')
    const [maxPage, setMaxPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [orderId, setOrderId] = useState<number>(0);

    let content;

    useEffect(() => {
        if(data) {
            setMaxPage(Math.ceil(data?.length / 6));
        }
    }, [isLoading])

    if (isLoading) content = <>loading...</>
    else content = data?.slice(6 * currentPage, 6 * currentPage + 6)?.map((order, index) => (
        <HistoryData data={order} key={index} />
    ))

    const fetchPagination = <Pagination>
        <FontAwesomeIcon icon={faChevronLeft} className="i" onClick={() => setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))}></FontAwesomeIcon>{" "}
        <span>{`${currentPage + 1} / ${maxPage}`}</span>
        <FontAwesomeIcon icon={faChevronRight} className="i" onClick={() => setCurrentPage((prev) => (prev + 1 < maxPage ? prev + 1 : prev))}></FontAwesomeIcon>{" "}
    </Pagination>
    return (
        <UserActivities>
            <h2>Order History</h2>

            {content}
            { maxPage > 0 && fetchPagination}
        </UserActivities>
    )
}

export default History