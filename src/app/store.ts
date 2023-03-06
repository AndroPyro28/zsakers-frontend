import { privateApi, publicApi, passwordResetApi } from "./baseApi";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import checkoutSlice from "../features/checkoutSlice";
 const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [privateApi.reducerPath]: privateApi.reducer,
    [passwordResetApi.reducerPath]: passwordResetApi.reducer,
    user: userSlice,
    checkout: checkoutSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(publicApi.middleware, privateApi.middleware, passwordResetApi.middleware),
   
});

export default store