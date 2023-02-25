import React from 'react'
import { Product } from '../../../../model'
import { VariantContainer } from './components'

function Variant({data}: {data: Product}) {
    return (
        <VariantContainer>
            <img src={data?.image_url} className='product__image' alt="" />
            <span className='product__name'>{data?.productName}</span>
            <span className='product__setcategory'>{data?.sub_category?.name}</span>
            <div className='buttons'> 
            <button className='decrement'>-</button> 
            <span className='quantity'>0 </span>
            <button className='increment'>+</button> </div>
        </VariantContainer>
    )
}

export default Variant