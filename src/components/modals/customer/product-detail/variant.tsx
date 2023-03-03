import React, { useEffect } from 'react'
import { bundleVariants, Product } from '../../../../model'
import { VariantContainer } from './components'

interface Props {
    data: Product
    bundleVariants: bundleVariants
    setBundleVariants: React.Dispatch<React.SetStateAction<bundleVariants>>
}

function Variant({data, setBundleVariants, bundleVariants}: Props) {
    const variant = bundleVariants.find((value) => value.productId == data?.id);

    useEffect(() => {
        setBundleVariants(prev => [...prev, {quantity: 0, productId: data?.id}])
    }, [])

    const handleIncrement = () => {
        const bundles = bundleVariants;
        setBundleVariants([])
        bundles.map((bundle) => {
            if(bundle.productId == data?.id) {
                setBundleVariants(prev => 
                    [...prev, {quantity: bundle.quantity + 1, productId: bundle.productId}]
                )
            }
            else {
                setBundleVariants(prev => [...prev, bundle])
            }
        })
        
    }

    const handleDecrement = () => {
        const bundles = bundleVariants;
        setBundleVariants([])
        bundles.map((bundle) => {
            if(bundle.productId == data?.id) {
                setBundleVariants(prev => 
                    [...prev, {quantity: bundle.quantity > 0 ?bundle.quantity - 1 : 0 , productId: bundle.productId}]
                )
            }
            else {
                setBundleVariants(prev => [...prev, bundle])
            }
        })
        
    }

    return (
        <VariantContainer>
            <img src={data?.image_url} className='product__image' alt="" />
            <span className='product__name'>{data?.productName}</span>
            <span className='product__setcategory'>{data?.sub_category?.name}</span>
            <div className='buttons'> 
            <button className='decrement' onClick={handleDecrement}>-</button> 
            <span className='quantity'>{variant?.quantity} </span>
            <button className='increment' onClick={handleIncrement}>+</button> </div>
        </VariantContainer>
    )
}

export default Variant