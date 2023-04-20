import { privateApi } from "../baseApi";
import { CreateSubcategory, Subcategory, UpdateSubcategory } from "../../model";

const subCategoryApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubcategory: builder.query<Subcategory[], string>({
      query: (search) => ({
        url: `subcategory`,
        method: "GET",
      }),
      providesTags: (result = [], error, arg) => [
        { type: "Subcategory", id: arg },
        { type: "Category", id: arg },
      ],
    }),
    createSubcategory: builder.mutation<void, CreateSubcategory>({
      query: (body) => ({
        url: `subcategory`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Subcategory" },
        { type: "Category" },
      ],
    }),
    updateSubcategory: builder.mutation<void, UpdateSubcategory>({
      query: ({ id, ...rest }) => ({
        url: `subcategory/${id}`,
        method: "PATCH",
        body: { ...rest },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Subcategory" },
        { type: "Category" },
      ],
    }),
    deleteSubcategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `subcategory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Subcategory" },
        { type: "Category" },
      ],
    }),
  }),
  overrideExisting: false,
});
export default subCategoryApi;

export const {
  useCreateSubcategoryMutation,
  useGetAllSubcategoryQuery,
  useUpdateSubcategoryMutation,
  useDeleteSubcategoryMutation,
} = subCategoryApi;
