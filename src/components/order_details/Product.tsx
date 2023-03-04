import { faArrowDown, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model'
import { BundledOrderProducts, OrderedProduct, OrderProductContainer, ProductCalculation, ProductName, ProductPrice } from '../../pages/admin/order_details/components'

function Product({ data }: { data: CartProduct }) {

  const [openBundleInfo, setOpenBundleInfo] = useState(false);
  return (
    <OrderProductContainer onClick={() => setOpenBundleInfo(prev => !prev)}>
      <OrderedProduct>
        {
          data?.product.productType === 'BUNDLE' && <FontAwesomeIcon icon={faChevronDown} className="dropDownIcon" />
        }
        <img src={data.product.image_url} alt="" className="product__image" />
        <ProductName>
          <span className="detail1">{data.product.productName}</span>
          <small className="detail2"> {data.product.details}</small>
        </ProductName>
        <ProductCalculation>{data?.product.productType === 'BUNDLE' ? `${data.product.quantity} pcs` : ''} </ProductCalculation>

        <ProductCalculation>Qty: {data.quantity} </ProductCalculation>
        <ProductPrice>{productPriceFormatter(data.product.price * data.quantity + '')}</ProductPrice>
      </OrderedProduct>
      {
        data?.product.productType === 'BUNDLE' && openBundleInfo && <BundledOrderProducts>
          {
            data?.Cart_Product_Variant!.map((cart_product_variant) => (
              <OrderedProduct>
                {/* <FontAwesomeIcon icon={faChevronRight} className="dropDownIcon" /> */}
                <img src={cart_product_variant.product.image_url} alt="" className="product__image" />
                <ProductName>
                  <span className="detail1">{cart_product_variant.product.productName}</span>
                  <small className="detail2"> {cart_product_variant.product.details}</small>
                </ProductName>
                <ProductCalculation>Qty: {cart_product_variant.quantity} </ProductCalculation>
              </OrderedProduct>
            ))
          }
        </BundledOrderProducts>
      }
    </OrderProductContainer>

  )
}

export default Product