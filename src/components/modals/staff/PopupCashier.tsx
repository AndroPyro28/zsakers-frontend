import React from 'react'
import { ModalBackdrop } from '../components'
import { CashierInput, PopupCashierContainer } from './components'

interface Props {
    inputMoney: number
    handlePrint: () => void
    setInputMoney: React.Dispatch<React.SetStateAction<number>>
    setToggleCashier: React.Dispatch<React.SetStateAction<boolean>>
    totalAmount: number
}
function PopupCashier({
  inputMoney,
  handlePrint,
  totalAmount,
  setInputMoney,
  setToggleCashier,
}: Props) {
  return (
    <ModalBackdrop>
        <PopupCashierContainer>
          <div onClick={() => setToggleCashier(false)}> <i className="fa-solid fa-xmark closeBtn"></i> </div>
        <h1>Cashier </h1>
            <CashierInput>
              <label htmlFor="">Enter Amount: </label> <input 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMoney(e.target.valueAsNumber)}
              placeholder={`${totalAmount}`}
               type="number" />
            </CashierInput>
             <button disabled={inputMoney < totalAmount || inputMoney === 0}
             onClick={handlePrint}>
              Print Receipt
            </button>
        </PopupCashierContainer>
    </ModalBackdrop>
  )
}

export default PopupCashier