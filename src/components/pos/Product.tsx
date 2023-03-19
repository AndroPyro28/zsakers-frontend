import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import { useAddToCartMutation, useGetCartProducts, useUpdateQuantityMutation } from '../../services/cart-products';
import { ProductContainer, Image, Name, Price } from './components'
import { bundleVariants } from '../../model/Bundle'
import ProductDetails from '../modals/customer/product-detail/ProductDetails';

interface Props {
  data: ProductInterface
}
function Product({ data }: Props) {
  const [bundleVariants, setBundleVariants] = useState<bundleVariants>([]);
  const [productId, setProductId] = useState(0);

  const [addToCartMutation] = useAddToCartMutation();
  const { data: cartProducts } = useGetCartProducts()
  const [updateQuantity] = useUpdateQuantityMutation()

  const handleClick = async () => {

    const cartProduct = cartProducts?.find((cartProduct) => cartProduct.product.id == data.id);
    try {

      // if (data?.productType === 'BUNDLE') {
        return setProductId(data?.id)
      // }
      // if (!cartProduct && data?.stock > 0) {
      //   const result = await addToCartMutation({ productId: data?.id, bundleVariants: bundleVariants });
      // }
      // else if (cartProduct && cartProduct.quantity < data?.stock) {
      //   const result = await updateQuantity({
      //     id: cartProduct.id,
      //     action: 'increment'
      //   })
      // }
      // else {
      //   toast('You reached the maximum stock of this product', { type: 'info' })
      // }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {
        productId > 0 && <ProductDetails setProductId={setProductId} productId={productId} />
      }
      <ProductContainer onClick={handleClick}>


        <Image src={data.image_url} />
        <Name>{data?.productName}</Name>
        <Price>{productPriceFormatter(data.price + '')}</Price>
      </ProductContainer>
    </>

  )
}

export default Product