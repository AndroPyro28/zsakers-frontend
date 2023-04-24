import { privateApi } from "../baseApi";
import { User } from "../../model";
import { createStaff, updateStaff } from "../../model/Staff";

const staffApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getStaffs: builder.query<User [], void>({
            query: (search) => ({
                url: `staff`,
                method:"GET",
            }),
            providesTags: (result: any, error, arg) => [
                {type: 'Staff', id: "LIST"},
                ...result?.map(({id}: any) => ({id, type: 'Staff'}))
            ],
        }),
        createStaff: builder.mutation<void, createStaff>({
            query: (body) => ({
                url: `staff`,
                method:"POST",
                body
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Staff'}, {type: 'Admin'}],
        }),
        updateStaff: builder.mutation<void, updateStaff>({
            query: ({id, status}) => ({
                url: `staff/${id}`,
                method:"PATCH",
                body: {
                    status
                }
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Staff', id: arg.id}],
        }),
        deleteStaff: builder.mutation<void, number>({
            query: id => ({
                url: `staff/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Staff', id: arg}],
        }),

    }),
    overrideExisting: false
})
export default staffApi;

export const { useGetStaffsQuery, useUpdateStaffMutation, useDeleteStaffMutation, useCreateStaffMutation} = staffApi