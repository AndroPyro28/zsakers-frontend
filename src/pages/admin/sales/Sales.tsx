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
import { Link } from "react-router-dom";

function Sales() {
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const { data: Orders } = useGetCompletedCancelledOrdersQuery(
    {
      filterDateFrom,
      filterDateTo
    }
  )

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

      {/* <div style={{ position: 'fixed', top: -10000 }}>
        <PDFExport ref={pdfExportYearComponent} paperSize="A4">
          <PdfContent>
            <h1>Report for {summaryYear} </h1>

            <Summary>
              {
                monthlySales?.map((value, index) => {
                  return <MonthSummary key={index}>
                    <h4>{labels[value.month]}</h4>
                    <div className="content" style={{ color: 'rgb(166,183,241)' }} ><strong >Total Success Transaction</strong>: <label>{monthlySuccessTransactions[value.month].total}</label></div>
                    <div className="content" style={{ color: 'rgb(229,111,139)' }} ><strong >Total Cancelled Transaction</strong>: <label>{monthlyCancelledTransactions[value.month].total}</label></div>
                    <div className="content" style={{ color: 'rgb(136,246,156)' }} ><strong >Total Transaction</strong>: <label>{monthlyTotalTransactions[value.month].total}</label></div>
                    <div className="content" style={{ color: 'rgb(6,224,46)' }} ><strong >Total Sales</strong>: <label>{value.total}</label></div>
                  </MonthSummary>
                })
              }

            </Summary>
          </PdfContent>
        </PDFExport>
      </div>

      <div style={{ position: 'fixed', top: -10000 }}>
        <PDFExport ref={pdfExportMonthComponent} paperSize="A4">
          <PdfContent>
            <h1>Report for month of {labels[summaryMonth]} {summaryYear} </h1>

            <Summary>
              <MonthSummary >
                <h4>{labels[summaryMonth]}</h4>
                <div className="content" style={{ color: 'rgb(166,183,241)' }} ><strong >Total Success Transaction</strong>: <label>{monthlySuccessTransactions[summaryMonth]?.total}</label></div>
                <div className="content" style={{ color: 'rgb(229,111,139)' }} ><strong >Total Cancelled Transaction</strong>: <label>{monthlyCancelledTransactions[summaryMonth]?.total}</label></div>
                <div className="content" style={{ color: 'rgb(136,246,156)' }} ><strong >Total Transaction</strong>: <label>{monthlyTotalTransactions[summaryMonth]?.total}</label></div>
                <div className="content" style={{ color: 'rgb(6,224,46)' }} ><strong >Total Sales</strong>: <label>{monthlySales[summaryMonth]?.total}</label></div>
              </MonthSummary>
            </Summary>
          </PdfContent>
        </PDFExport>
      </div> */}


      <GlobalStyles />
      <FilterDataContainer2>

        <Title>
        Sales Report
        </Title>

        <PrintExport>
          <Link
            to="/admin/sales/report/monthly"
            >Generate report by month</Link>
          <Link
            to="/admin/sales/report/yearly"
            >Generate report by year</Link>
          <Link
            to="/admin/sales/report/weekly"
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