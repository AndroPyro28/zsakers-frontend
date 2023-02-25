import { useState } from 'react'
import CashierContent from '../../../components/pos/CashierContent'
import ProductsContent from '../../../components/pos/ProductsContent'
import { PosContainer, PosDivider, } from './components'

function Pos() {

  return (
    <PosContainer>
      <PosDivider>
        
        <ProductsContent />

        <CashierContent />

      </PosDivider>
    </PosContainer>
  )
}

export default Pos