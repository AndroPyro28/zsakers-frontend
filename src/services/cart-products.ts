import { useSelector } from "react-redux";
import { privateApi } from "../app/baseApi";
import { CartProduct, UpdateQuantity } from "../model/Cart-Product";
import {} from "../model/product";

const cartProductApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation<void, number>({
      query: (productId) => ({
        url: `cart-products`,
        method: "POST",
        body: {
          productId,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Cart-Product"}],
    }),
    getCartProducts: builder.query<CartProduct[], void>({
      query: () => ({
        url: `cart-products`,
        method: "GET",
      }),
      providesTags: (result: any, error, arg) => [
        { type: "Cart-Product", id: "LIST" },
        ...result?.map(({id}: any) => ({id, type: 'Cart-Product' })),
      ],
      transformResponse: (cartProducts: CartProduct[]) => {
        return cartProducts.filter(
          (cartProduct) => !cartProduct.product.archive
        );
      },
    }),
    updateQuantity: builder.mutation<void, UpdateQuantity>({
      query: ({ id, action }) => ({
        url: `cart-products/${id}`,
        method: "PATCH",
        body: {
          action,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Cart-Product", id: arg.id }],
    }),
    deleteOneCartProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `cart-products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Cart-Product", id: arg },
      ],
    }),
  }),
  overrideExisting: false,
});

export const useGetCartProducts = () =>
  useSelector(cartProductApi.endpoints.getCartProducts.select());

export default cartProductApi;

export const {
  useAddToCartMutation,
  useGetCartProductsQuery,
  useDeleteOneCartProductMutation,
  useUpdateQuantityMutation,
} = cartProductApi;
