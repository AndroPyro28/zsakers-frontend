import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { bundleParentProduct, bundleVariants, Product } from '../../../../model'
import Addon from './Addon'
import { ProductFlavors, Title, Flavors } from './components'
import Variant from './variant'

interface Props {
    addOns: bundleVariants
    setAddOns: React.Dispatch<React.SetStateAction<bundleVariants>>
    orderedProduct: Product
    variants: bundleParentProduct[]
    bundleVariants: bundleVariants
    setBundleVariants: React.Dispatch<React.SetStateAction<bundleVariants>>
}

function Variants({ variants, setBundleVariants, bundleVariants, orderedProduct, addOns, setAddOns }: Props) {

    let variantsContent;
    if (variants.length === 0) variantsContent = <h2>No other variants</h2>
    if (variants.length > 0) variantsContent = <Flavors>
        {
            variants.map((product) => (
                <Variant
                    data={product.bundleChildProduct}
                    setBundleVariants={setBundleVariants}
                    bundleVariants={bundleVariants}
                    orderedProduct={orderedProduct}
                />
            ))
        }
    </Flavors>

    let addonsContent;
    const addons = orderedProduct.category.Product?.filter(product => product?.productType === 'ADDONS' && product.stock > 0)
    if (addons.length === 0) addonsContent = <h2>No other addons</h2>
    if (addons.length > 0) addonsContent = <Flavors>
        {
            addons.map((product) => (
                <Addon
                    addonData={product}
                    orderedProduct={orderedProduct}
                    setBundleVariants={setBundleVariants}
                    bundleVariants={bundleVariants}
                />
            ))
        }
    </Flavors>

    return <ProductFlavors>

        {orderedProduct.productType === 'BUNDLE' && <>
            <Title>Other variants</Title>
            {variantsContent}
        </>}
        <Title>Add ons</Title>
            {addonsContent}
    </ProductFlavors>
}

export default Variants