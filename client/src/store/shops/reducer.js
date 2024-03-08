import { fetchShops } from "./operations";

import { createSlice } from "@reduxjs/toolkit";

const shopsSlice = createSlice({
  name: "shops",
  initialState: { data: [], currentShop: null, isLoading: true, error: null },
  reducers: {
    setShop: (state, { payload }) => ({ ...state, currentShop: payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.fulfilled, (state, { payload }) => ({
        ...state,
        currentShop: state.currentShop ? state.currentShop : payload[0],
        data: payload,
        isLoading: false,
      }))
      .addCase(fetchShops.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchShops.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export const { setShop } = shopsSlice.actions;

export const shopsReducer = shopsSlice.reducer;
