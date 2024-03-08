import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (order, { rejectWithValue }) => {
    try {
      await axios.post("/api/order", order);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOrdersHistory = createAsyncThunk(
  "order/fetchOrdersHistory",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/order?email=${email}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching order history:", error.response ? error.response.data : error.message);
      return rejectWithValue(error.message);
    }
  }
);
