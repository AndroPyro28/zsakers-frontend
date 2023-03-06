import { useSelector } from "react-redux";
import { privateApi } from "../app/baseApi";
import { UpdateUser, User } from "../model";

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

    }),
    overrideExisting: false
})
export default userApi;

export const useGetCurrentUser = () => useSelector(userApi.endpoints.getMe.select())

export const { useGetMeQuery, useUpdateUserMutation } = userApi