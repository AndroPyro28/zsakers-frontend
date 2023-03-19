import React, { useEffect } from 'react'
import { bundleVariants, Product } from '../../../../model'
import { VariantContainer } from './components'

interface Props {
    orderedProduct: Product
    data: Product
    bundleVariants: bundleVariants
    setBundleVariants: React.Dispatch<React.SetStateAction<bundleVariants>>
}

function Variant({data, setBundleVariants, bundleVariants, orderedProduct}: Props) {
    const variant = bundleVariants.find((value) => value.productId == data?.id);
    
    const totalQuantityOfBundledProducts = bundleVariants
    ?.reduce((total, bundle) => !bundle.exclude ? bundle.quantity + total : total , 0)
    
    const incrementAvailable = data?.stock <= variant?.quantity! || orderedProduct.quantity <= totalQuantityOfBundledProducts
    useEffect(() => {
        setBundleVariants(prev => [...prev, {quantity: 0, productId: data?.id,
        exclude: false}])
    }, [])

    const handleIncrement = () => {
        const bundles = bundleVariants;
        setBundleVariants([])
        bundles.map((bundle) => {
            if(bundle.productId == data?.id) {
                setBundleVariants(prev => 
                    [...prev, {quantity: bundle.quantity + 1, productId: bundle.productId,
                        exclude: false}]
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
                    [...prev, {quantity: bundle.quantity > 0 ?bundle.quantity - 1 : 0 , productId: bundle.productId,
                        exclude: false}]
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
            <button className='decrement'  onClick={handleDecrement}>-</button> 
            <span className='quantity'>{variant?.quantity} </span>
            <button className='increment' disabled={incrementAvailable} onClick={handleIncrement}>+</button> </div>
        </VariantContainer>
    )
}

export default Variant