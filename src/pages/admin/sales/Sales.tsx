import React from "react";
import FilterData from "../../../components/sales/FilterData";
import SalesData from "../../../components/sales/SalesData";
import {
  SaleContainerPage,
  GlobalStyles,
  FilterDataContainer,
  Title,
  FilterDataContainer2,
  PrintExport,
  PdfContent,
  Summary,
  MonthSummary
} from "./components";
import { useRef } from "react";

import SaleOrders from "../../../components/sales/SalesOrders";
import productPriceFormatter from "../../../helpers/ProductPriceFormatter";
import { useState } from "react";
import { useEffect } from "react";
import { useGetCompletedCancelledOrdersQuery, useGetSummaryQuery } from "../../../app/services";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf'
import { Link, useLocation } from "react-router-dom";

function Sales() {
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const { data: Orders } = useGetCompletedCancelledOrdersQuery(
    {
      filterDateFrom,
      filterDateTo
    }
  )

  const {pathname} = useLocation();
  const role = pathname.split('/')[1]
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
  const pdfExportYearComponent = useRef<any>(null);
  const pdfExportMonthComponent = useRef<any>(null);

  if (isLoading) return <></>

  const { monthlyCancelledTransactions, monthlySales, monthlySuccessTransactions, monthlyTotalTransactions, totalSalesToday } = summary!


  let total = Orders?.reduce((total, order) => {
    if (order?.order_status !== 'cancelled') return total + order.totalAmount;
    return total;
  }, 0);

  const arrYear: number[] = [];
  const currentYear = new Date().getFullYear()
  for (let startYear = 1900; startYear <= currentYear; startYear++) {
    arrYear.push(startYear);
  }

  const handleExportYearPdf = (e: any) => {
    if (pdfExportYearComponent.current) {
      pdfExportYearComponent.current?.save()
    }
  }

  const handleExportMonthPdf = (e: any) => {
    if (pdfExportMonthComponent.current) {
      pdfExportMonthComponent.current?.save()
    }
  }

  if (!total) total = 0;

  return (
    <SaleContainerPage>

      <GlobalStyles />
      <FilterDataContainer2>

        <Title>
        Sales Report
        </Title>

        <PrintExport>
          <Link
            to={`/${role}/sales/report/monthly`}
            >Generate report by month</Link>
          <Link
            to={`/${role}/sales/report/yearly`}
            >Generate report by year</Link>
          <Link
            to={`/${role}/sales/report/weekly`}
            >Generate report by week</Link>
        </PrintExport>

      </FilterDataContainer2>

      <SalesData
        summaryYear={summaryYear}
        totalSalesToday={totalSalesToday}
        monthlyCancelledTransactions={monthlyCancelledTransactions}
        monthlySales={monthlySales}
        monthlySuccessTransactions={monthlySuccessTransactions}
        monthlyTotalTransactions={monthlyTotalTransactions}
      />

      <FilterDataContainer>
        <Title>
          Total sales: {productPriceFormatter(total + '')}
        </Title>
        <FilterData dateSetter={{ setFilterDateFrom, setFilterDateTo }} />
      </FilterDataContainer>
      <SaleOrders orders={Orders!} />
    </SaleContainerPage>
  );
}

export default Sales;