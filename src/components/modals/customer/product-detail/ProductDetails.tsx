import { useState } from 'react'
import productPriceFormatter from '../../../../helpers/ProductPriceFormatter'
import { useGetProductByIdQuery } from '../../../../services'
import Logic from '../../../store/Logic'
import { ModalBackdrop } from '../../components'
import {bundleVariants} from '../../../../model/Bundle'
import {
    ProductDetailsContainer,
    ProductDetail,
    ImageContainer,
    Details,
    Name,
    Description,
    Others,
    Title,
    Price,
    AddToCartBtn,
    ProductFlavors,
    Flavors,
    BundleSize
} from './components'
import Product from './variant'
import Variants from './Variants'

function ProductDetails({ productId, setProductId }: { productId: number, setProductId:  React.Dispatch<React.SetStateAction<number>> }) {
    
    const [bundleVariants, setBundleVariants] = useState<bundleVariants>([]);
    const {addToCart} = Logic({bundleVariants})

    const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
    if(isLoading) return <></>
    if(isError)  return <></>

    const hasVariants = product?.productType === 'BUNDLE'

    const totalQuantityOfBundledProducts = bundleVariants
    ?.reduce((total, bundle) => bundle.quantity + total , 0)

    const isAvailable = hasVariants && totalQuantityOfBundledProducts == product.quantity || !hasVariants

    const addToCartClick = () => {
            addToCart(product!)
    }
    return (
        <ModalBackdrop>
            <ProductDetailsContainer hasVariants={hasVariants}>
                <button onClick={() => setProductId(0)}>X</button>
                <ProductDetail>
                    <ImageContainer>
                        <img src={product?.image_url} alt="" />
                    </ImageContainer>
                    <Details>
                        <Name>{product?.productName}</Name>
                        <BundleSize>{product?.quantity} pcs</BundleSize>
                        <Description>{product?.details}</Description>
                        <Others>
                            <Price> {productPriceFormatter(product?.price + '')}</Price>
                            <AddToCartBtn onClick={addToCartClick} disabled={!isAvailable} >Add to cart</AddToCartBtn>
                        </Others>
                    </Details>
                </ProductDetail>
                {
                    product?.productType === 'BUNDLE' && <Variants orderedProduct={product} variants={product?.bundleParentProduct!} setBundleVariants={setBundleVariants} bundleVariants={bundleVariants}/>
                }
            </ProductDetailsContainer>
        </ModalBackdrop>
    )
}

export default ProductDetails