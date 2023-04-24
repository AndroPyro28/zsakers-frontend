import React from 'react'
import { useNavigate } from 'react-router-dom';
import productPriceFormatter from '../../helpers/ProductPriceFormatter';
import { CartProduct } from '../../model';
import { useGetCartProducts } from '../../app/services/cart-products';
import CartItem from './CartItem';
import { CartPopupBox, CartPopupBoxContainer, CartSummary, ProductListContainer, SummaryRow } from './components'
import Logic from './Logic';
function CartPopup() {

  const { data: cartProducts } = useGetCartProducts();
  const navigate = useNavigate()

  // const calculateAmount = (totalValue: any, cartProduct: CartProduct) => {
  //   // calculate add ons
  //   if (cartProduct.Cart_Product_Variant && cartProduct.Cart_Product_Variant?.length > 0) {
  //     const addonPrice = cartProduct.Cart_Product_Variant.reduce((total, cartVariant) => {
  //       const addonPrice = cartVariant.product.productType === 'ADDONS' ?
  //         total + cartVariant.product.price : total;
  //       return (addonPrice)
  //     }, 0)

  //     return (addonPrice + totalValue + cartProduct.product.price) * cartProduct.quantity;
  //   }

  //   return (totalValue + cartProduct.product.price) * cartProduct.quantity
  // }

  const calculateAmount = (totalValue: number, cartProduct: CartProduct) => {
    // calculate add ons
    if (cartProduct.Cart_Product_Variant && cartProduct.Cart_Product_Variant?.length > 0) {

      const addonPrice = cartProduct.Cart_Product_Variant.reduce((total, cartVariant) => {
        const addonPrice = cartVariant.product.productType === 'ADDONS' ?
          total + cartVariant.product.price : total;
        return (addonPrice)
      }, 0)

      return totalValue + ((addonPrice + cartProduct.product.price ) * cartProduct.quantity);
    }

    return totalValue + (cartProduct.product.price * cartProduct.quantity)
  }

  const totalAmount = cartProducts?.reduce(calculateAmount, 0);

  return (
    <CartPopupBox>
      <CartPopupBoxContainer>
        <h1>You have {cartProducts?.length} items in your cart</h1>
        <ProductListContainer>
          {
            cartProducts?.map((cartProduct) =>
              <CartItem key={cartProduct.id} data={{
                id: cartProduct.id,
                product: cartProduct.product,
                quantity: cartProduct.quantity,
                Cart_Product_Variant: cartProduct.Cart_Product_Variant
              }} />)
          }
        </ProductListContainer>

        <CartSummary>
          <SummaryRow>
            <h1>Cart Total</h1>
            <span style={{ fontWeight: "600" }}> {productPriceFormatter(totalAmount + '')}</span>
          </SummaryRow>

          <button onClick={() => navigate("/customer/checkout")}>Checkout</button>
        </CartSummary>
      </CartPopupBoxContainer>
    </CartPopupBox>
  )
}

export default CartPopup