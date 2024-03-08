import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUserData: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { addUserData } = userSlice.actions;

export const userReducer = userSlice.reducer;