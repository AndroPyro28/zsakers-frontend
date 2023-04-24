import { privateApi } from "../baseApi";
import { User } from "../../model";
import { createStaff, updateStaff } from "../../model/Staff";

const adminApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getAdmins: builder.query<User [], void>({
            query: (search) => ({
                url: `admin`,
                method:"GET",
            }),
            providesTags: (result: any, error, arg) => [
                {type: 'Admin', id: "LIST"},
                ...result?.map(({id}: any) => ({id, type: 'Admin'}))
            ],
        }),
        createAdmin: builder.mutation<void, createStaff>({
            query: (body) => ({
                url: `admin`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Admin'}],
        }),
        updateAdmin: builder.mutation<void, updateStaff>({
            query: ({id, status}) => ({
                url: `admin/${id}`,
                method:"PATCH",
                body: {
                    status
                }
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Admin', id: arg.id}],
        }),
        deleteAdmin: builder.mutation<void, number>({
            query: id => ({
                url: `admin/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Admin', id: arg}],
        }),

    }),
    overrideExisting: false
})
export default adminApi;

export const { useGetAdminsQuery, useCreateAdminMutation, useUpdateAdminMutation, useDeleteAdminMutation } = adminApi