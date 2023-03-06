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
        forgotPassword: builder.mutation<void, string>({
            query: email => ({
                url: `auth/forgot-password`,
                method:"POST",
                body: {email}
            }),
            invalidatesTags: ['ForgotPassword']
        }),
        codeConfirmation: builder.mutation<void, {email: string, code: string}>({
            query: body => ({
                url: `auth/confirm-reset-code`,
                method:"POST",
                body
            }),
            invalidatesTags: ['ForgotPassword']
        }),
    }),
    overrideExisting: false
})
export default authApi;

export const { useSigninMutation, useSignupMutation, useForgotPasswordMutation, useCodeConfirmationMutation } = authApi