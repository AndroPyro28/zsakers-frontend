import React from 'react';
import styled from 'styled-components';

import { Address, BusinessName, SummaryTableContent, SummaryTitle, SummaryValue, Table, WeeklyContainer, WeeklyWrapper } from './styles'
import { Summary, MonthSummary as SummaryContent } from '../sales/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { PDFExport } from '@progress/kendo-react-pdf'
import { useRef } from 'react'
import { Button } from '@progress/kendo-react-buttons'
import { useGetMonthlyReportQuery } from '../../../app/services/report';

const Monthly = () => {

    const { data: report, isLoading, isError } = useGetMonthlyReportQuery()

  const pdfExportMonthlyComponent = useRef<any>(null);

    const navigate = useNavigate()

    console.log(report)
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

      const handleExportMonthlyPdf = (e: any) => {
        if (pdfExportMonthlyComponent.current) {
          pdfExportMonthlyComponent.current?.save()
        }
      }

    return <WeeklyWrapper>
    <FontAwesomeIcon icon={faChevronLeft} className="backBtn" onClick={() => navigate(-1)} />
    <PDFExport 
     ref={pdfExportMonthlyComponent}
    >
        <WeeklyContainer>
            <BusinessName>Zsakers-Cafe Hagonoy</BusinessName>
            <Address>Hagonoy Bulacan</Address>

            <h1>report for this of {labels[new Date().getMonth()]} </h1>
            {/* <Summary style={{
                gridTemplateColumns: 'repeat(1, 1fr)'
            }}>
            <SummaryContent  style={{
            fontSize: '1.3em'
          }}>
          <div className="content"
         
          ><strong >Total Success Transaction</strong>:
            <strong>
              {report?.totalSuccess}
            </strong>

          </div>
          <div className="content"
          ><strong >Total Walkin Transaction</strong>:
            <strong>
              {report?.walkinTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong >Total Online Transaction</strong>:
            <strong>
              {report?.onlineTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong >Total Cancelled Transaction</strong>:
            <strong>
              {report?.totalCancelled}
            </strong></div>
          <div className="content"
          ><strong >Total Transaction</strong>:
            <strong>
              {report?.totalTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong  style={{color:'black'}}>Total Sales</strong>:
            <strong style={{color:'black'}}>
                {report?.totalSales}
                </strong>
          </div>
        </SummaryContent>
            </Summary> */}

            <Table>
                {/* <h1>Summary for this month!</h1> */}
                <SummaryTableContent>
                    <SummaryTitle>Cancelled Transactions</SummaryTitle> <SummaryValue>{report?.totalCancelled}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Success Transactions</SummaryTitle> <SummaryValue>{report?.totalSuccess}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Online Transactions</SummaryTitle> <SummaryValue>{report?.onlineTransaction}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Walkin Transactions</SummaryTitle> <SummaryValue>{report?.walkinTransaction}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle>Total Transactions</SummaryTitle> <SummaryValue>{report?.totalTransaction}</SummaryValue>
                </SummaryTableContent>
                <SummaryTableContent>
                    <SummaryTitle> <strong>Total Sales </strong></SummaryTitle> <SummaryValue><strong>{report?.totalSales}</strong></SummaryValue>
                </SummaryTableContent>
            </Table>
        </WeeklyContainer>
    </PDFExport>
    <Button 
    onClick={handleExportMonthlyPdf}
    >Print Report (PDF)</Button>
</WeeklyWrapper>
}

export default Monthly;