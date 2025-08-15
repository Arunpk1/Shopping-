
import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

const appStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});


export const { addItem, clearItem, removeItem } = cartSlice.actions;
export default appStore;
