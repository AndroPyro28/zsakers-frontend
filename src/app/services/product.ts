import { privateApi } from "../baseApi";
import {
  CreateProduct,
  getBySubcategory,
  Product,
  Search,
  UpdateProduct,
} from "../../model/product";

const productApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query<Product[], Search>({
      query: ({ searchName, categoryId, subcategoryId, setcategoryId }) => ({
        url: `products?name=${searchName}&&categoryId=${categoryId}&&subcategoryId=${subcategoryId}&&setcategoryId=${setcategoryId}`,
        method: "GET",
      }),
      providesTags: (result: any, error, arg) => [
        { type: "Product",},
        ...result?.map(({id}: any) => ({id, type: 'Product' })),
      ],
    }),
    getProductsBySubcategory: builder.query<Product[], getBySubcategory>({
      query: ({ subcategoryId  }) => ({
        url: `products?subcategoryId=${subcategoryId}`,
        method: "GET",
      }),
      providesTags: (result: any, error, arg) => [
        { type: "Product", id: "LIST" },
        ...result?.map(({id}: any) => ({id, type: 'Product' })),
      ],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
    createProduct: builder.mutation<void, CreateProduct>({
      query: (body) => ({
        url: `products`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Product" }],
    }),
    updateProduct: builder.mutation<void, UpdateProduct>({
      query: ({ id, ...rest }) => ({
        url: `products/${id}`,
        method: "PATCH",
        body: { id, ...rest },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Product", id: arg.id }],
    }),
    archiveProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
  }),
  overrideExisting: false,
});
export default productApi;

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useArchiveProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery
} = productApi;
