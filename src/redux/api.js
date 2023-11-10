// api.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "products",
    }),
    addProduct: build.mutation({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
    }),
    updateProduct: build.mutation({
      query: ({ productId, ...productData }) => ({
        url: `products/${productId}`,
        method: "PUT",
        body: productData,
      }),
    }),
    deleteProduct: build.mutation({
      query: (productId) => ({
        url: `products/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = api;
