import { useGetWeeklyReportQuery } from '../../../services/report'
import { Address, BusinessName, SummaryTableContent, SummaryTitle, SummaryValue, Table, WeeklyContainer, WeeklyWrapper } from './styles'
import { Summary, MonthSummary as SummaryContent } from '../sales/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { PDFExport } from '@progress/kendo-react-pdf'
import { useRef } from 'react'
import { Button } from '@progress/kendo-react-buttons'
function Weekly() {

  const { data: report, isLoading, isError } = useGetWeeklyReportQuery()
  const navigate = useNavigate()
  const pdfExportWeeklyComponent = useRef<any>(null);

  if (isLoading) return <>loading...</>
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const weekdays: string[] = []
  // Loop through the dates of the current week and print them
  for (
    let date = startOfWeek;
    date <= endOfWeek;
    date.setDate(date.getDate() + 1)
  ) {
    weekdays.push(new Date(date.toLocaleDateString())?.toISOString().slice(0, 10));
  }

  const weeklySales = []


  const summary = {
    totalSales: 0,
    totalSuccess: 0,
    totalCancelled: 0,
    totalTransaction: 0
  }

  for (const day of weekdays) {
    if (!Boolean(report[day])) {
      weeklySales.push(
        <SummaryContent>
          <h4>{daysOfWeek[new Date(day).getDay()]} ({day})</h4>
          <div className="content"
          ><strong >Total Success Transaction</strong> :
            <strong>
              {0}
            </strong>

          </div>
          <div className="content"
          ><strong >Total Cancelled Transaction</strong> :
            <strong>
              {0}
            </strong></div>
          <div className="content"
          ><strong >Total Transaction</strong>:
            <strong>
              {0}
            </strong>
          </div>
          <div className="content"
          ><strong  style={{color:'black'}}>Total Sales</strong>:
            <strong style={{color:'black'}}>{0}</strong>
          </div>
        </SummaryContent>
      )
    }
    else {

      weeklySales.push(
        <SummaryContent>
          <h4>{daysOfWeek[new Date(day).getDay()]} ({day})</h4>
          <div className="content"
          ><strong >Total Success Transaction</strong> :
            <strong>
              {report[day]!.totalSuccess}
            </strong>

          </div>
          <div className="content"
          ><strong >Total Cancelled Transaction</strong> :
            <strong>
              {report[day]!.totalCancelled}
            </strong></div>
          <div className="content"
          ><strong >Total Transaction</strong>:
            <strong>
              {report[day]!.totalTransaction}
            </strong>
          </div>
          <div className="content"
          ><strong  style={{color:'black'}}>Total Sales</strong>:
            <strong style={{color:'black'}}>{report[day].totalSales}</strong>
          </div>
        </SummaryContent>
      )
    }
  }

  for(const r in report) {
    summary.totalSuccess += Number(report[r]?.totalSuccess);
    summary.totalCancelled += Number(report[r]?.totalCancelled);
    summary.totalTransaction += Number(report[r]?.totalTransaction);
    summary.totalSales += Number(report[r]?.totalSales);
  }
  const handleExportWeeklyPdf = (e: any) => {
    if (pdfExportWeeklyComponent.current) {
      pdfExportWeeklyComponent.current?.save()
    }
  }
  return (
    <WeeklyWrapper>
      <FontAwesomeIcon icon={faChevronLeft} className="backBtn" onClick={() => navigate('/admin/sales') }/>
      <PDFExport ref={pdfExportWeeklyComponent}>
    <WeeklyContainer>
      <BusinessName>Zsakers-Cafe Hagonoy</BusinessName>
      <Address>Hagonoy Bulacan</Address>

      <Summary>
        {
          weeklySales.map((jsx) => jsx)
        }
      </Summary>

      <Table>
        <SummaryTableContent>
          <SummaryTitle>Cancelled Transactions</SummaryTitle> <SummaryValue>{summary.totalCancelled}</SummaryValue>
        </SummaryTableContent>
        <SummaryTableContent>
          <SummaryTitle>Success Transactions</SummaryTitle> <SummaryValue>{summary.totalSuccess}</SummaryValue>
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
    <Button onClick={handleExportWeeklyPdf}>Print Report (PDF)</Button>
    </WeeklyWrapper>

  )
}
export default Weekly