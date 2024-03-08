import { toast } from "react-toastify";

import { placeOrder, fetchOrdersHistory } from "./operations";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOrdered: false,
  isLoading: false,
  error: null,
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrderHistory(state) {
      state.orders = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.fulfilled, (state) => {
        toast.success("Order placed!");
        return {
          ...state,
          isOrdered: true,
          isLoading: false,
        };
      })
      .addCase(placeOrder.pending, (state) => ({
        ...state,
        isOrdered: false,
        isLoading: true,
      }))
      .addCase(placeOrder.rejected, (state, { payload }) => {
        toast.error("Something went wrong :(");
        return {
          ...state,
          isOrdered: false,
          isLoading: false,
          error: payload,
        };
      })
      .addCase(fetchOrdersHistory.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchOrdersHistory.fulfilled, (state, { payload }) => ({
        ...state,
        orders: payload,
        isLoading: false,
      }))
      .addCase(fetchOrdersHistory.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export const { clearOrderHistory } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
