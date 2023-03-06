import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import {UpdatePassword} from "../model/Update-Password"
import { User } from "../model/User";
import {passwordResetApi} from "../app/baseApi";

const UpdatePasswordApis = passwordResetApi.injectEndpoints({
    endpoints: (builder) => ({
        authUpdatePasswordPage: builder.query<User, void>({
            query: () => ({
                url:'/auth/me',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
        updatePassword: builder.mutation<void, UpdatePassword>({
            query: body=> ({
                url:'/auth/update-password',
                method:'POST',
                body: body,
            }),
            invalidatesTags: ['User']
        }),
    }),
    overrideExisting: false
})

export default UpdatePasswordApis;

export const {useUpdatePasswordMutation, useAuthUpdatePasswordPageQuery} = UpdatePasswordApis;