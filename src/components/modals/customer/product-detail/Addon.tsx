import React, { useEffect, useRef } from 'react'
import productPriceFormatter from '../../../../helpers/ProductPriceFormatter'
import { bundleVariants, Product } from '../../../../model'
import { VariantContainer } from './components'

interface Props {
    orderedProduct: Product
    addonData: Product,
    bundleVariants: bundleVariants
    setBundleVariants: React.Dispatch<React.SetStateAction<bundleVariants>>
}

function Addon({addonData, bundleVariants, setBundleVariants} : Props) {

  useEffect(() => {
    setBundleVariants(prev => [...prev, {
        quantity: 0,
        productId: addonData?.id,
        exclude: true
    }])
  }, [])

  const variant = bundleVariants.find((value) => value.productId == addonData?.id);

const handleClickAddons = () => {
    const bundles = bundleVariants;
    const addonIndex = bundles.findIndex(bundle => bundle.productId == addonData.id) 
    
    if(bundles[addonIndex]?.quantity === 0) {
        bundles[addonIndex].quantity = 1;
    } else {
        bundles[addonIndex].quantity = 0;
    }
    setBundleVariants(bundles)
}

  return (
    <VariantContainer onClick={handleClickAddons} 
    style={{cursor:'pointer'}}
        active = {variant?.quantity! > 0}
    >
            <img src={addonData?.image_url} className='product__image' alt="" />
            <span className='product__name'>{addonData?.productName}</span>
            <span className='product__setcategory'>{ productPriceFormatter( addonData.price + '') }</span>
            <div className='buttons'> 
            </div>
        </VariantContainer>
  )
}

export default Addon