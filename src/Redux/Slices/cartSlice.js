import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    number: 0,
    items: null,
    array: [],
  },
  reducers: {
    getCartItems: (state) => {
      let cartItems = [];
      for (let i = 1; i <= localStorage.length - 1; i++) {
        if (JSON.parse(localStorage.getItem(`${i}`)) > 0) {
          cartItems.push(i);
        }
      }
      state.number = cartItems.length;
    },
    deleteItem: (state, action) => {
      state.items = JSON.parse(localStorage.getItem(`${action.payload}`));
      state.items = state.items - 1;
      localStorage.setItem(`${action.payload}`, JSON.stringify(state.items));
    },
    addItem: (state, action) => {
      state.items = JSON.parse(localStorage.getItem(`${action.payload}`));
      state.items = state.items + 1;
      localStorage.setItem(`${action.payload}`, JSON.stringify(state.items));
    },
    getArray: (state) => {
      let cartItems = [];
      for (let i = 1; i <= localStorage.length - 1; i++) {
        const quantity = JSON.parse(localStorage.getItem(`${i}`));
        if (quantity > 0) {
          cartItems.push({ id: i, quantity });
        }
      }
      state.array = cartItems;
    },
  },
});

export const { getCartItems, deleteItem, getArray, addItem } =
  cartSlice.actions;
