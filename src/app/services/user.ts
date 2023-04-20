import { useSelector } from "react-redux";
import { privateApi } from "../baseApi";
import { UpdateUser, User } from "../../model";
import { ChangePasswordModel } from "../../model/Update-Password";

const userApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getMe: builder.query<User, void>({
            query: () => ({
                url: `auth/me`,
                method:"GET",
            }),
            providesTags: (result, error, arg) => [{type: 'User', id: "query"}],
        }),
        updateUser: builder.mutation<void, UpdateUser>({
            query: ({ id, ...rest }) => ({
              url: `users/${id}`,
              method: "PATCH",
              body: { ...rest },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "User" }],
          }),

          changePassword: builder.mutation<void, ChangePasswordModel>({
            query: body => ({
                url:'/auth/change-password',
                method:'POST',
                body,
            }),
        }),

    }),
    overrideExisting: false
})
export default userApi;

export const useGetCurrentUser = () => useSelector(userApi.endpoints.getMe.select())

export const { useGetMeQuery, useUpdateUserMutation, useChangePasswordMutation } = userApi