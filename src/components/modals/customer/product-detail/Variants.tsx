import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Product } from '../../../../model'
import { useGetAllProductQuery } from '../../../../services'
import { ProductFlavors, Title, Flavors } from './components'
import Variant from './variant'

interface Props {
    variants: Product[]
}

function Variants({ variants }: Props) {
    let content;
    if(variants.length === 0) content = <h2>No other variants</h2>
    if(variants.length > 0) content = <Flavors>
    {
        variants.map((product) => (
            <Variant data={product} />
        ))
    }
</Flavors>

    return <ProductFlavors>
        <Title>Other variants</Title>
        {content}
    </ProductFlavors>
}

export default Variants