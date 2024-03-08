import { createSlice } from "@reduxjs/toolkit";
import { placeOrder } from "store/order/operations";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    manageItem: (state, { payload }) => {
      const idx = state.items.findIndex((el) => el.id === payload.id);
      if (idx === -1) {
        return {
          ...state,
          items: [
            ...state.items,
            { ...payload, quantity: Number(payload.quantity) },
          ],
          totalPrice:
            state.totalPrice + payload.price * Number(payload.quantity),
        };
      } else {
        const item = state.items[idx];
        const updatedTotalPrice =
          state.totalPrice -
          item.price * item.quantity +
          payload.price * Number(payload.quantity);
        return {
          ...state,
          items: state.items.map((el, i) =>
            i === idx ? { ...payload, quantity: Number(payload.quantity) } : el
          ),
          totalPrice: updatedTotalPrice,
        };
      }
    },

    removeItem: (state, { payload }) => {
      const item = [...state.items].find((el) => el.id === payload.item.id);
      if (!item) return { ...state };
      const totalPrice = state.totalPrice - item.price * item.quantity;
      return {
        ...state,
        items: state.items.filter((el) => el.id !== item.id),
        totalPrice,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled, (state) => {
      return { items: [], totalPrice: 0 };
    });
  },
});


export const { manageItem, removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
