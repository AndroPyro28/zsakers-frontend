import React from 'react';
import { useGetYearlyReportQuery } from '../../../app/services/report';

import { Address, BusinessName, SummaryTableContent, SummaryTitle, SummaryValue, Table, WeeklyContainer, WeeklyWrapper } from './styles'
import { Summary, MonthSummary as SummaryContent } from '../sales/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { PDFExport } from '@progress/kendo-react-pdf'
import { useRef } from 'react'
import { Button } from '@progress/kendo-react-buttons'

const Yearly = () => {

  const navigate = useNavigate()
  const { data: report, isLoading, isError } = useGetYearlyReportQuery()
  const pdfExportYearComponent = useRef<any>(null);

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

  const summary = {
    totalSales: 0,
    totalSuccess: 0,
    totalCancelled: 0,
    totalTransaction: 0,
    onlineTransaction: 0,
walkinTransaction: 0
  }

//   for(const r of report) {
//     summary.totalSuccess += Number(report[r]?.totalSuccess);
//     summary.totalCancelled += Number(report[r]?.totalCancelled);
//     summary.totalTransaction += Number(report[r]?.totalTransaction);
//     summary.totalSales += Number(report[r]?.totalSales);
//   }  


  const data = report?.map((d) => {
    summary.totalSuccess += Number(d?.totalSuccess);
    summary.totalCancelled += Number(d?.totalCancelled);
    summary.totalTransaction += Number(d?.totalTransaction);
    summary.totalSales += Number(d?.totalSales);
    summary.onlineTransaction += Number(d?.onlineTransaction);
    summary.walkinTransaction += Number(d?.walkinTransaction);

    return <SummaryContent>
          <h4>{labels[d.month]}</h4>
          <div className="content"
          ><strong >Success Transaction:</strong> 
            <strong>
              {d.totalSuccess}
            </strong>
          </div>
          <div className="content"
          ><strong >Online Transaction:</strong> 
            <strong>
              {d.onlineTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong >Walkin Transaction:</strong> 
            <strong>
              {d.walkinTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong >Cancelled Transaction:</strong> 
            <strong>
            {d.totalCancelled}
            </strong></div>
          <div className="content"
          ><strong >Total Transaction:</strong>
            <strong>
            {d.totalTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong  style={{color:'black'}}>Total Sales:</strong>
            <strong style={{color:'black'}}>{d.totalSales}</strong>
          </div>
        </SummaryContent>
  })

  const handleExportYearlyPdf = (e: any) => {
    if (pdfExportYearComponent.current) {
      pdfExportYearComponent.current?.save()
    }
  }

 return <WeeklyWrapper>
    <FontAwesomeIcon icon={faChevronLeft} className="backBtn" onClick={() => navigate('/admin/sales')} />
    <PDFExport 
    ref={pdfExportYearComponent}
    >
        <WeeklyContainer>
            <BusinessName>Zsakers-Cafe Hagonoy</BusinessName>
            <Address>Hagonoy Bulacan</Address>

            <h1>Sales report for {new Date().getFullYear()}</h1>
            <Summary>
                {data}
            </Summary>

            <Table>
                <h1>Summary for this year!</h1>

                <SummaryTableContent>
                    <SummaryTitle>Cancelled Transactions</SummaryTitle> <SummaryValue>{summary.totalCancelled}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Success Transactions</SummaryTitle> <SummaryValue>{summary.totalSuccess}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Online Transactions</SummaryTitle> <SummaryValue>{summary.onlineTransaction}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Walkin Transactions</SummaryTitle> <SummaryValue>{summary.walkinTransaction}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Total Transactions</SummaryTitle> <SummaryValue>{summary.totalTransaction}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle> <strong>Total Sales </strong></SummaryTitle> <SummaryValue><strong>{summary.totalSales}</strong></SummaryValue>
                </SummaryTableContent>
            </Table>
        </WeeklyContainer>
    </PDFExport>
    <Button 
    onClick={handleExportYearlyPdf}
    >Print Report (PDF)</Button>
</WeeklyWrapper>
}

export default Yearly;