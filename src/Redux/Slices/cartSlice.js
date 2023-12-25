import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: null,
    array: [],
  },
  reducers: {
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
      let data = JSON.parse(localStorage.getItem('data'))
      data?.map((i) =>{
        const quantity = JSON.parse(localStorage.getItem(`${i.id}`))
        if(quantity > 0){
          cartItems.push({id : i.id, quantity});
        }
      })
      state.array = cartItems;
    },
  },
});

export const { getCartItems, deleteItem, getArray, addItem } =
  cartSlice.actions;
