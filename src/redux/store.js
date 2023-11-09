import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api.js";
import productReducer from "./reducers/productSlice.js";
export const store = configureStore({
  reducer: {
    products: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
