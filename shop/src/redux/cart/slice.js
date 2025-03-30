import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartThunk,
  decreaseQtyThunk,
  fetchCartThunk,
  increaseQtyThunk,
  removeFromCartThunk,
} from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "cart",
  initialState,
  selectors: {
    selectCart: (state) => state.items,
    selectAmount: (state) =>
      state.items.reduce(
        (total, item) => (total += item.count * item.price),
        0
      ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addToCartThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(removeFromCartThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addCase(increaseQtyThunk.fulfilled, (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);
        item.count++;
      })
      .addCase(decreaseQtyThunk.fulfilled, (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);
        item.count--;
      });
  },
});

export const cartReducer = slice.reducer;
export const { selectCart, selectAmount } = slice.selectors;
