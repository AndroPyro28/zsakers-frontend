import { Signin, Signup } from "../model";
import {publicApi} from "../app/baseApi"

const authApi = publicApi.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation<void, Signup>({
            query: body => ({
                url: `auth/signup`,
                method:"POST",
                body
            }),
            invalidatesTags: ['Signup']
        }),
        signin: builder.mutation<void, Signin>({
            query: body => ({
                url: `auth/signin`,
                method:"POST",
                body
            }),
            invalidatesTags: ['Signin']
        }),
    }),
    overrideExisting: false
})
export default authApi;

export const { useSigninMutation, useSignupMutation } = authApi