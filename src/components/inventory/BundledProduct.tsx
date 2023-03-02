import { Product } from '../../model'
import { BundledProductContainer } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
    data:Product
    bundleChildrenProductIds: number[]
    setBundleChildrenProductIds:  React.Dispatch<React.SetStateAction<number[]>>
}
function BundledProduct({data, bundleChildrenProductIds, setBundleChildrenProductIds}: Props) {

    const isChecked = bundleChildrenProductIds?.some(id => id === data?.id);

    const handleClick = () => {
        if(isChecked) {
            setBundleChildrenProductIds(prev => prev?.filter(productIds => productIds != data?.id))
        } else {
            setBundleChildrenProductIds(prev => [...prev, data?.id])
        }
    }
  return (
    <BundledProductContainer onClick={handleClick}>
        {isChecked && <FontAwesomeIcon icon={faCheck} className="check" />}
        <img src={data?.image_url} alt="" />
        <span>{data?.productName}</span>
    </BundledProductContainer>
  )
}

export default BundledProduct