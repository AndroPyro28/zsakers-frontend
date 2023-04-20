
import React, { useEffect, useState } from "react";
import {
    SalesDataContainer,
    DataContainer1,
    DataContainer2,
} from "./components";
import SaleInfo from "./SaleInfo";
import { Line, Bar, Pie, Doughnut, Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    LineController,
    BarController,
} from "chart.js";
import { useGetCompletedCancelledOrdersQuery, useGetSummaryQuery } from "../../app/services";
import { Summary } from "../../model";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    CategoryScale,
    LineController,
    BarController
);

const salesChartOption: any = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            align: "center",
            fontSize: 50,
            color: "black",
        },
    },
    // animations: {
    //     tension: {
    //         duration: 1000,
    //         easing: "linear",
    //         from: 0,
    //         to: 1,
    //         loop: true,
    //     },
    // },
    scales: {
        y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
        },
    },
    maintainAspectRatio: false,
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    CategoryScale,
    LineController,
    BarController
);

interface Props {
    summaryYear: number;
    totalSalesToday: number;
    monthlyCancelledTransactions: { total: number, month: number }[]
    monthlySales: { total: number, month: number }[]
    monthlySuccessTransactions: { total: number, month: number }[]
    monthlyTotalTransactions: { total: number, month: number }[]
}
function SalesData({ summaryYear,
    totalSalesToday,
    monthlyCancelledTransactions,
    monthlySales,
    monthlySuccessTransactions,
    monthlyTotalTransactions }: Props) {
    // const {data: summary, isLoading} = useGetSummaryQuery(summaryYear)
    // if(isLoading) return <></>

    // const { monthlyCancelledTransactions, monthlySales, monthlySuccessTransactions, monthlyTotalTransactions, totalSalesToday} = summary!

    const monthlyCancelledStats = new Array(12);
    monthlyCancelledTransactions?.forEach((cancelled) => {
        monthlyCancelledStats[cancelled.month] = cancelled.total
    })

    const monthlyTotalTransactionStats = new Array(12);
    monthlyTotalTransactions?.forEach((total) => {
        monthlyTotalTransactionStats[total.month] = total.total
    })

    const monthlySuccessTransactionStats = new Array(12);
    monthlySuccessTransactions?.forEach((successful) => {
        monthlySuccessTransactionStats[successful.month] = successful.total
    })

    const monthlyTotalSalesStats = new Array(12);
    monthlySales?.forEach((totalSales) => {
        monthlyTotalSalesStats[totalSales.month] = totalSales.total
    })


    const data: any = {
        labels,
        datasets: [
            {
                type: "line",
                label: "Monthly sales",
                borderColor: "rgb(6, 224, 46)",
                backgroundColor: "rgb(6, 224, 46)",
                data: monthlyTotalSalesStats,
                borderWidth: 2,
                borderRadius: 100,
            },
            {
                type: "line",
                label: "Monthly Successful Transactions",
                backgroundColor: "#a6b7f1",
                data: monthlySuccessTransactionStats,
                borderColor: "#a6b7f1",
                borderWidth: 2,
                borderRadius: 100,
            },
            {
                type: "line",
                label: "Monthly Total Transactions",
                backgroundColor: "rgb(136, 246, 156)",
                data: monthlyTotalTransactionStats,
                borderColor: "rgb(136, 246, 156)",
                borderWidth: 2,
                borderRadius: 100,
            },
            {
                type: "line",
                label: "Monthly Cancelled Transactions",
                backgroundColor: "rgb(229, 111, 139)",
                data: monthlyCancelledStats,
                borderColor: "rgb(229, 111, 139)",
                borderWidth: 2,
                borderRadius: 100,
            },

        ],
    };

    return (
        <SalesDataContainer>
            <DataContainer1>
                <SaleInfo
                    icon={"fa-solid fa-ranking-star"}
                    data={totalSalesToday}
                    title="Total sales today"
                />
                <SaleInfo
                    icon={"fa-solid fa-bag-shopping"}
                    data={monthlySales?.reduce((total, sale) => total + sale.total, 0)}
                    title={`Total sales for ${summaryYear}`}
                />
                <SaleInfo
                    icon={"fa-solid fa-cash-register"}
                    data={monthlySuccessTransactions?.reduce((total, transaction) => total + transaction.total, 0)}
                    title="Total successful transactions"
                />
                <SaleInfo
                    icon={"fa-solid fa-cash-register"}
                    data={monthlyCancelledTransactions?.reduce((total, transaction) => total + transaction.total, 0)}
                    title="Total cancelled transactions"
                />
                {/* <SaleInfo /> */}
            </DataContainer1>

            <DataContainer2>
                <Chart
                    data={data}
                    options={salesChartOption!}
                    style={{ position: "relative" }} type={'bar'} />
            </DataContainer2>
        </SalesDataContainer>
    )
}

export default SalesData