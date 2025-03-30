import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cartApi = axios.create({
  baseURL: "https://67e0367b7635238f9aace581.mockapi.io/",
});

export const fetchCartThunk = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await cartApi.get("/cart");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addToCartThunk = createAsyncThunk(
  "addToCart",
  async (product, thunkApi) => {
    try {
      const { data } = await cartApi.post("/cart", product);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeFromCartThunk = createAsyncThunk(
  "removeFromCart",
  async (id, thunkApi) => {
    try {
      const { data } = await cartApi.delete(`/cart/${id}`);
      return data.id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const increaseQtyThunk = createAsyncThunk(
  "increaseQty",
  async (product, thunkApi) => {
    try {
      const { data } = await cartApi.put(`/cart/${product.id}`, {
        ...product,
        count: product.count + 1,
      });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const decreaseQtyThunk = createAsyncThunk(
  "decreaseQty",
  async (product, thunkApi) => {
    try {
      const { data } = await cartApi.put(`/cart/${product.id}`, {
        ...product,
        count: product.count - 1,
      });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
