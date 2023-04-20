import React, { useState } from 'react'
import { useCancelOrderMutation } from '../../../../app/services'
import { ModalBackdrop } from '../../components'
import { CancelForm, Choice, ChoiceContainer, ChoiceList } from './components'

interface Props {
    setToggleCancel:  React.Dispatch<React.SetStateAction<boolean>>
    id: number
}

function CancelOrderModal({setToggleCancel,
    id}: Props) {

    const [cancelOrderMutation] = useCancelOrderMutation()
    const [reason, setReason] = useState('');
    const [otherReason, setOtherReason] = useState('')

    const cancelOrder = async () => {
      try {
      const res = await cancelOrderMutation({id,
        reason: `${reason} ${otherReason ? `, ` + otherReason : ''}`
    })

      setToggleCancel(false)
      } catch (error) {
        console.error(error)
      }
    }

    const cancelChoice1 = [
        'Want to change payment method',
        'Need to change shipping address',
        'I want to order a different product',
        'I placed a duplicate order'
    ]
    const cancelChoice2 = [
        'Change of mind',
        'Delivery takes too long',
        'Order created by mistake',
        'Other reasons'
    ]

    
  return (
    <ModalBackdrop>
        <CancelForm>
            <h1>Why cancel the order?</h1>
            <div onClick={() => setToggleCancel(false)} > <i className="fa-solid fa-xmark closeBtn" ></i> </div>
            
            <ChoiceContainer>
            <ChoiceList>
                {
                    cancelChoice1.map(choice => (
                        <Choice> <input name="reason" type="radio" value={choice} id={choice} onChange={(e) => setReason(e.target.value)}  /> <label htmlFor={choice}>{choice}</label></Choice>
                    ))
                }
            </ChoiceList>

            <ChoiceList>
                {
                    cancelChoice2.map(choice => (
                        <Choice><input name="reason" type="radio" value={choice} id={choice} onChange={(e) => setReason(e.target.value)}  /> <label htmlFor={choice}>{choice}</label> </Choice>
                    ))
                }
            </ChoiceList>
                
        </ChoiceContainer>
        {
            reason.toLocaleLowerCase() === 'other reasons' && <textarea onChange={(e) => setOtherReason(e.target.value)} name="" id="" cols={30} rows={10}></textarea>
        }
                <button onClick={cancelOrder}>Submit</button>
        </CancelForm>

    </ModalBackdrop>
  )
}

export default CancelOrderModal