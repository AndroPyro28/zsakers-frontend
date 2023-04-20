import React, { useState } from 'react'
import {
  InventoryLeftContentContainer, SearchItemContainer,
  ProductStatisticContainer,
  ProductStatistic
} from "../../pages/admin/inventory/components"

import { Line } from "react-chartjs-2";
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
    ChartOptions,
    DatasetController,
    ChartData
} from "chart.js";
import { useGetSummaryQuery } from '../../app/services';

function InventoryLeftContent({ setSearchName }: { setSearchName: React.Dispatch<React.SetStateAction<string>> }) {

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

const chartOption: ChartOptions = {
  responsive: true,
  // plugins: {
  //   title: {
  //     display: true,
  //     align: "center",
  //     // fontSize: 50,
  //     color: "black",
  //   },
  // },
  // animations: {
  //     tension: {
  //         duration: 1000,
  //         easing: "linear",
  //         from: 0,
  //         to: 1,
  //         loop: true,
  //     },
  // },
  // scales: {
  //   y: {
  //     // defining min and max so hiding the dataset does not change scale range
  //     min: 0,
  //   },
  // },
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
const [summaryYear, setSummaryYear] = useState(new Date().getFullYear());
const [summaryMonth, setSummaryMonth] = useState(new Date().getMonth());
const { data: summary, isLoading } = useGetSummaryQuery(summaryYear)

if(isLoading) return <></>
const { monthlySales, monthlyTotalTransactions} = summary!

const monthlyTotalTransactionStats = new Array(12);
    monthlyTotalTransactions?.forEach((total) => {
        monthlyTotalTransactionStats[total.month] = total.total
    })

const monthlyTotalSalesStats = new Array(12);
monthlySales?.forEach((totalSales) => {
    monthlyTotalSalesStats[totalSales?.month] = totalSales?.total
})

const sampleData: ChartData<"line", number[], string> = {
  labels,
  datasets: [
      {
          label: "Total sales every month",
          borderColor: "black",
          backgroundColor: "white",
          fill: false,
          data: monthlyTotalSalesStats,
      },
  ],
};

  return (
    <InventoryLeftContentContainer>
      <h1>Search for items</h1>

      <small>Name of an item</small>

      <SearchItemContainer>
      <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value)}
        />
      </SearchItemContainer>

      <ProductStatisticContainer>
        <div className="product__info">
          <div className="product__label">
            <div className='center'>
              <label htmlFor=""> {`Total sales for ${new Date().getFullYear()}`} </label>
              <h3>{monthlySales?.reduce((total, sale) => total + sale.total, 0)}</h3>
            </div>
          </div>

          <div className="product__label">
            <div className='center'>
              <label htmlFor=""> Total transactions </label>
              <h3>{monthlyTotalTransactions?.reduce((total, sale) => total + sale.total, 0)}</h3>
            </div>
          </div>
        </div>

        <ProductStatistic>
      
        <Line
                data={sampleData}
                options={chartOption!}
                style={{ position: "relative", }}
            />

        </ProductStatistic>
      </ProductStatisticContainer>
    </InventoryLeftContentContainer>
  )
}

export default InventoryLeftContent