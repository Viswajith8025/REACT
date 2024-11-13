import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
  data: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },

    addData: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
        state.count += 1; 
      }
    },

    removeFromCart: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      state.count -= 1; 
    },

    clearCart: (state) => {
      state.data = [];
      state.count = 0; 
    },
  },
});

export const { increment, decrement, addData, removeFromCart, clearCart } = counterSlice.actions;
export default counterSlice.reducer;
