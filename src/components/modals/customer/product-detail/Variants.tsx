import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { bundleParentProduct, bundleVariants, Product } from '../../../../model'
import { ProductFlavors, Title, Flavors } from './components'
import Variant from './variant'

interface Props {
    variants: bundleParentProduct[]
    bundleVariants: bundleVariants
    setBundleVariants: React.Dispatch<React.SetStateAction<bundleVariants>>
}

function Variants({ variants, setBundleVariants, bundleVariants }: Props) {
    let content;
    if (variants.length === 0) content = <h2>No other variants</h2>
    if (variants.length > 0) content = <Flavors>
        {
            variants.map((product) => (
                <Variant 
                data={product.bundleChildProduct} 
                setBundleVariants={setBundleVariants} 
                bundleVariants={bundleVariants} 
                />
            ))
        }
    </Flavors>

    return <ProductFlavors>
        <Title>Other variants</Title>
        {content}
    </ProductFlavors>
}

export default Variants