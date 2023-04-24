import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { useGetCartProducts, useGetCartProductsQuery } from '../../app/services/cart-products'
import { Address, BranchName, ReceiptProduct, CashierContent as CashierContentContainer, Contact, Discount, DiscountAmount, Date as DateContent, OrderId, Orders, OrderSummary, PrintReceiptButton, ReceiptBody, ReceiptContainer, ReceiptContent, ReceiptFooter, ReceiptHeader, Subtotal, SubtotalAmount, Summary, Tax, TaxAmount, Total, TotalAmount, SummaryContent, CashierInfo, } from './components'
import Order from './Order'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import ReactToPrint from 'react-to-print'
import PopupCashier from '../modals/staff/PopupCashier'
import { useCreateOrderWalkinMutation, useGetCurrentUser } from '../../app/services'
import { CartProduct } from '../../model'
import {SerialPort} from 'serialport';
// import { Printer } from '@react-thermal-printer/printer';
// import html2canvas from 'html2canvas';
// import {ThermalPrinter, PrinterTypes, CharacterSet, BreakLine} from 'node-thermal-printer'
// import {JSDOM} from 'jsdom'
// import printer from 'printer';
import {Cut, Line, Printer, Text, Row, render} from "react-thermal-printer";

import printer from 'printer';

function CashierContent() {

  const { data: cartProducts, isLoading, isError } = useGetCartProductsQuery()
  const [port, setPort] = useState(null);

  // useEffect(() => {
  //   const connectPrinter = async () => {
  //     const ports = await SerialPort.list();
  //     const printerPort = ports.find(port => port.manufacturer?.includes('printer manufacturer'));
  //     if (printerPort) {
  //       const serialPort = new SerialPort({
  //         // baudRate: 9600,
  //         // dataBits: 8,
  //         // parity: 'none',
  //         // stopBits: 1,
  //         baudRate: 9600,
  //         dataBits: 8,
  //         parity: 'none',
  //         path: printerPort.path
  //       });

  //       console.log(serialPort)
  //       // setPort(serialPort?.);
  //     }
  //   };

  //   connectPrinter();
  // }, []);
  

  // const { data: cartProducts, isLoading, isError} = useGetCartProducts();

  let content;
  const {data: user} = useGetCurrentUser()
  if (isLoading) content = <h3>Loading...</h3>

  if (isError) content = <h3>Something went wrong...</h3>
  
  if (cartProducts?.length === 0) content = <h3>No Orders yet</h3>
  else content = cartProducts?.map((cartProduct) => <Order data={cartProduct} />)

  
  
  const componentRef = useRef<any>();
  const printBtnRef = useRef<any>()
  const [inputMoney, setInputMoney] = useState(0)
  const [toggleCashier, setToggleCashier] = useState(false);
  const printerRef = useRef<any>(null);
  const handlePrint = async () => {
    if (printBtnRef.current) {
      printBtnRef.current.handlePrint()
    } 

    // window.print()
    // const port = await window.navigator.requestPort();
    // await port.open({ baudRate: 9600 });
    
    // const writer = port.writable?.getWriter();
    // if (writer != null) {
    //   await writer.write(data);
    //   writer.releaseLock();
    // }

    
    }
    
  const calculateAmount = (totalValue: number, cartProduct: CartProduct) => {
    // calculate add ons
    if (cartProduct.Cart_Product_Variant && cartProduct.Cart_Product_Variant?.length > 0) {

      const addonPrice = cartProduct.Cart_Product_Variant.reduce((total, cartVariant) => {
        const addonPrice = cartVariant.product.productType === 'ADDONS' ?
          total + cartVariant.product.price : total;
        return (addonPrice)
      }, 0)

      return totalValue + ((addonPrice + cartProduct.product.price ) * cartProduct.quantity);
    }

    return totalValue + (cartProduct.product.price * cartProduct.quantity)
  }

  const totalAmount = cartProducts?.reduce(calculateAmount, 0)!;

  const tax = (totalAmount! / 1.12) * .12;
  const subtotal = totalAmount! - tax;
  const hashId = `${uuid()}`.replace(/\-/g,"").replace(/\D+/g, '');
  const order_id = hashId.substring(0, 5)

  const [createOrder] = useCreateOrderWalkinMutation()

  const handleAfterPrint = async () => {
    try {
      const res: any = await createOrder({
        totalAmount,
        order_id,
        cartProducts: cartProducts!
      });
    } catch (error) {
      console.error(error)
    }
    setToggleCashier(false)
    setInputMoney(0)
  }

  const handlePay = () => {
    setToggleCashier(true)
  }

  

  return (
    <CashierContentContainer>
      {/* <ThermalPrinter ref={printerRef} /> */}

      {
        toggleCashier && <PopupCashier
          handlePrint={handlePrint}
          inputMoney={inputMoney}
          totalAmount={totalAmount}
          setInputMoney={setInputMoney}
          setToggleCashier={setToggleCashier}
        />
      }
      <h1>Current Order</h1>
      <Orders>
        {content}
      </Orders>

      <OrderSummary>
        <Summary>
          <Subtotal>Subtotal</Subtotal>
          <SubtotalAmount>{productPriceFormatter(subtotal + '')}</SubtotalAmount>
        </Summary>

        <Summary>
          <Tax>Tax</Tax>
          <TaxAmount>{productPriceFormatter(tax + '')}</TaxAmount>
        </Summary>

        <Summary>
          <Subtotal>Total</Subtotal>
          <SubtotalAmount>{productPriceFormatter(totalAmount + '')}</SubtotalAmount>
        </Summary>

      </OrderSummary>

      <PrintReceiptButton onClick={handlePay} > Pay Now</PrintReceiptButton>

      <ReactToPrint
        ref={printBtnRef}
        onAfterPrint={handleAfterPrint}
        // trigger={() => <PrintReceiptButton>Print Receipt</PrintReceiptButton>}
        content={() => componentRef.current}
      />

      <div style={{ display: 'none' }}>
        <ReceiptContainer ref={componentRef} >

          <ReceiptContent>

            <ReceiptHeader>
              <BranchName>Zsakers Cafe</BranchName>
              <Address>RQQ4+MP7, Hagonoy Bulacan</Address>
              <Contact> (+63 960 841 0594) </Contact>
              <DateContent> {new Date().toLocaleString()} </DateContent>
              <OrderId>OrderId: <span>{order_id}</span></OrderId>
              <CashierInfo>Cashier Name: <span> {user?.profile.firstname} {user?.profile.lastname} </span></CashierInfo>
            </ReceiptHeader>

            <ReceiptBody>
              {
                cartProducts?.map((cartProduct) => {
                  return <ReceiptProduct>
                    <span>{cartProduct.product.productName}</span>
                    <span>@ {cartProduct.product.price} x {cartProduct.quantity}</span>
                    <span>{productPriceFormatter(cartProduct.product.price * cartProduct.quantity + '')}</span>
                  </ReceiptProduct>
                })
              }
            </ReceiptBody>

            <ReceiptFooter>
              <SummaryContent>
                <div className='items-count'>Items Count:  </div>
                <span>{cartProducts?.length}</span>
              </SummaryContent>
              <SummaryContent><div className='sub-total'>Sub total:  </div> <span>{productPriceFormatter (subtotal + '' )}</span></SummaryContent>
              <SummaryContent><div className='sub-total'>Tax:  </div> <span>{productPriceFormatter (tax + '' )}</span></SummaryContent>
              <SummaryContent><div className='total-amount'>Total Amount: </div>  <span>{productPriceFormatter(totalAmount + '')}</span></SummaryContent>
              <SummaryContent><div className='sub-total'>Cash:  </div> <span>{inputMoney}</span></SummaryContent>
              <SummaryContent><div className='sub-total'>Change:  </div> <span>{productPriceFormatter((inputMoney - totalAmount).toFixed(2) + '')}</span></SummaryContent>
            </ReceiptFooter>

            <h3>Thank you!</h3>
          </ReceiptContent>
        </ReceiptContainer>
      </div>

    </CashierContentContainer>
  )
}

export default CashierContent