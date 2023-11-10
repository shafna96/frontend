// productSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Slice
const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      return [...state, action.payload];
    },
    updateProduct: (state, action) => {
      return state.map((product) =>
        product.id === action.payload._id ? action.payload : product
      );
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product._id !== action.payload);
    },
    updateProductFavorite: (state, action) => {
      const { productId, isFav } = action.payload;
      const product = state.find((p) => p._id === productId);
      if (product) {
        product.isFav = isFav;
      }
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  updateProductFavorite,
} = productSlice.actions;
export default productSlice.reducer;
