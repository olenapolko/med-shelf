import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShops = createAsyncThunk(
  "shops/fetchShops",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/shops");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
