import { faArrowDown, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model'
import { BundledOrderProducts, OrderedProduct, OrderProductContainer, ProductCalculation, ProductName, ProductPrice } from '../../pages/admin/order_details/components'

function Product({ data }: { data: CartProduct }) {

  const [openBundleInfo, setOpenBundleInfo] = useState(false);

  const addonsPrice = data?.Cart_Product_Variant?.reduce((total, cartVariant) => {
    const addonPrice = cartVariant.product.productType === 'ADDONS' ? cartVariant.product.price : 0;
    return addonPrice + total;
  }, 0) 
  const totalPrice = data?.product.price + addonsPrice! ?? 0 * data?.quantity
  return (
    <OrderProductContainer onClick={() => setOpenBundleInfo(prev => !prev)}>
      <OrderedProduct>
        {
          data?.Cart_Product_Variant!.length > 0 && <FontAwesomeIcon icon={faChevronDown} className="dropDownIcon" />
        }
        <img src={data.product.image_url} alt="" className="product__image" />
        <ProductName>
          <span className="detail1">{data.product.productName} </span>
          <small className="detail2"> {data.product.quantity} pc(s) - {data.product.details}</small>
        </ProductName>
        
        <ProductCalculation>{data?.product.productType} </ProductCalculation>

        <ProductCalculation>Qty: {data.quantity} </ProductCalculation>
        <ProductPrice>{productPriceFormatter(totalPrice + '')}</ProductPrice>
      </OrderedProduct>
      {
         openBundleInfo && <BundledOrderProducts>
          {
            data?.Cart_Product_Variant!.map((cart_product_variant) => (
              <OrderedProduct>
                <img src={cart_product_variant.product.image_url} alt="" className="product__image" />
                <ProductName>
                  <span className="detail1">{cart_product_variant.product.productName}</span>
                  <small className="detail2"> {cart_product_variant.product.details}</small>
                </ProductName>
                <ProductName>
                  <small className="detail2"> {cart_product_variant.product.productType === 'ADDONS' ? `Addons` : `Variations`}</small>
                </ProductName>
                <ProductCalculation>Qty: {cart_product_variant.quantity} </ProductCalculation>
                <ProductPrice> { cart_product_variant.product.productType === 'ADDONS'  ? `${productPriceFormatter( Number(data.product.quantity) * Number(cart_product_variant.product.price) + '') }` : ``}</ProductPrice>
                
              </OrderedProduct>
            ))
          }
        </BundledOrderProducts>
      }
    </OrderProductContainer>

  )
}

export default Product