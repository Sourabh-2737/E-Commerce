import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Slices/productSlice";
import { cartSlice } from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart : cartSlice.reducer,
  },
});

export default store;
