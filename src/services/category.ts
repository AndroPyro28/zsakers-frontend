import { privateApi } from "../app/baseApi";
import { Category, CreateCategory, UpdateCategory } from "../model";

const categoryApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query<Category[], string>({
      query: (search) => ({
        url: `category?search=${search}`,
        method: "GET",
      }),
      providesTags: (result: any, error, arg) => [
        { type: "Category", id: arg },
        ...result?.map(({id}: any) => ({id, type: 'Category' })),

      ],
    }),
    createCategory: builder.mutation<void, CreateCategory>({
      query: (body) => ({
        url: `category`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Category" }],
    }),
    updateCategory: builder.mutation<void, UpdateCategory>({
      query: ({ id, ...rest }) => ({
        url: `category/${id}`,
        method: "PATCH",
        body: { ...rest },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Category", id: arg.id }],
    }),
    deleteCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Category", id: arg }],
    }),
  }),
  overrideExisting: false,
});
export default categoryApi;

export const {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi;
