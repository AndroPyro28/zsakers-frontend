import React from 'react'
import { ReceiptContent } from './components';

interface Props {
  content: string
}
const Receipt = React.forwardRef<any>((props, ref) => {
  console.log(props)
    return (
      <ReceiptContent ref={ref}>My cool content here!</ReceiptContent>
    );
  });

export default Receipt