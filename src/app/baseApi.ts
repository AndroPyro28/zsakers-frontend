import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie";

export const publicApi = createApi({
    reducerPath: `publicApi`,
    baseQuery: fetchBaseQuery({
      baseUrl:process.env.REACT_APP_DEV_URL,
    }),
    endpoints: () => ({}),
    tagTypes: ["Signup", "Signin", "ForgotPassword"],
  });

  export const privateApi = createApi({
    reducerPath: `privateApi`,
    baseQuery: fetchBaseQuery({
      baseUrl:process.env.REACT_APP_DEV_URL,
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${Cookies.get("access_token")}`);
        return headers;
      },
    }),
    endpoints: () => ({}),
    tagTypes: ['Category', 'Subcategory', 'Product', 'SetCategory', 'User', 'Cart-Product', 'Staff', 'Order'],
  });

  export const passwordResetApi = createApi({
    reducerPath: `passwordResetApi`,
      baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
        prepareHeaders: (headers) => {
          headers.set("Authorization", `Bearer ${Cookies.get("password_reset_token")!}`);
          return headers;
        },
      }),
      endpoints: () => ({}),
      tagTypes: ["User",],
    });