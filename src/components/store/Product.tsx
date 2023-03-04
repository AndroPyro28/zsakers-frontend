import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import { useGetCartProducts } from '../../services/cart-products'
import {ProductContainer, Price, Image, Name, Details, Buttons} from './components'
import Logic from './Logic'

interface Props {
  data: ProductInterface,
  setProductId: React.Dispatch<React.SetStateAction<number>>
}
function Product({data, setProductId}: Props) {
  const {addToCart} = Logic({})

  const totalStockOfChildProduct = data?.bundleParentProduct.reduce((totalStock, product) => {
    return product.bundleChildProduct.stock + totalStock
  }, 0)
  
 
  const isBundleOutOfStock = totalStockOfChildProduct < data?.quantity;
  const isSingleOutOfStock = data?.stock <= 0;

  const isAvailable: boolean = data?.productType === 'BUNDLE' ? isBundleOutOfStock : isSingleOutOfStock;

  const addToCartClick = () => {
    if(data?.productType === 'SINGLE') {
      addToCart(data)
    } else {
      setProductId(data.id)
    }
  }

  return (
    <ProductContainer isOutOfStock={isAvailable}>
            <Price>{productPriceFormatter(data.price + '')}</Price>
            <Image src={data.image_url} />
            <Name>{data.productName}</Name>
            <Details>{data.details || '...'}</Details>
            <Buttons>
               <span className='view' onClick={() => setProductId(data.id)}>
               <i className="fa-solid fa-eye"></i></span>
                <span className='add__to__cart' onClick={addToCartClick}>{isAvailable ? 'Out of stock' : 'Add to cart'} </span>
            </Buttons>
    </ProductContainer>
  )
}

export default Product
