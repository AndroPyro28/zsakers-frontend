import {privateApi} from "../app/baseApi"
import { createSetCategory, SetCategory, UpdateSetcategory } from "../model";

const setCategoryApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAllSetCategory: builder.query<SetCategory[],string>({
            query: search => ({
                url: `setcategory`,
                method: "GET"
            }),
            providesTags: (result = [], error, arg) => [{type:'SetCategory', id: arg}, {type:'Subcategory', id: arg}, {type:'Category', id: arg}],
        }),
        createSetCategory: builder.mutation<void, createSetCategory>({
            query: body => ({
                url: `setcategory`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type:"SetCategory"}, {type:'Subcategory'}, {type:'Category'}]
        }),
        updateSetCategory: builder.mutation<void, UpdateSetcategory>({
            query: ({id, ...rest}) => ({
                url: `setcategory/${id}`,
                method:"PATCH",
                body: {...rest}
            }),
            invalidatesTags: (result, error, arg) => [{type:"SetCategory"}, {type:'Subcategory'}, {type:'Category'}]
        }),
        deleteSetCategory: builder.mutation<void, number>({
            query: (id) => ({
                url: `setcategory/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{type:"SetCategory"}, {type:'Subcategory'}, {type:'Category'}]
        }),
    }),
    overrideExisting: false
})
export default setCategoryApi;

export const { 
    useCreateSetCategoryMutation, 
    useGetAllSetCategoryQuery, 
    useUpdateSetCategoryMutation,
    useDeleteSetCategoryMutation
} = setCategoryApi