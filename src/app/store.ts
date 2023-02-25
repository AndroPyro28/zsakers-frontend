import { privateApi, publicApi } from "./baseApi";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import checkoutSlice from "../features/checkoutSlice";
 const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [privateApi.reducerPath]: privateApi.reducer,
    user: userSlice,
    checkout: checkoutSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(publicApi.middleware, privateApi.middleware),
   
});

export default store