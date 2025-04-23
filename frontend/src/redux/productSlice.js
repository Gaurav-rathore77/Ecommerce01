import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// This file manages products and cart items in the Redux store
const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },

    addCartItems: (state, action) => {
      const existingItem = state.cartItem.find(el => el._id === action.payload._id);
      if (existingItem) {
        toast("Item already added in cart");
      } else {
        toast("Successfully added item to cart");
        const total = parseFloat(action.payload.price) || 0;
        state.cartItem.push({ ...action.payload, qty: 1, total });
      }
    },

    deleteCartItems: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        toast("Item removed from cart");
        state.cartItem.splice(index, 1);
      }
    },

    increaseQty: (state, action) => {
      const item = state.cartItem.find((el) => el._id === action.payload);
      if (item) {
        item.qty += 1;
        item.total = item.qty * parseFloat(item.price || 0);
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cartItem.find((el) => el._id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
        item.total = item.qty * parseFloat(item.price || 0);
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItems,
  deleteCartItems,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;
