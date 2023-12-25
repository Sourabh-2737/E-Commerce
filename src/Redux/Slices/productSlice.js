import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : [],
    edit : false,
    singleProduct : null
  },
  reducers: {
    addProduct: (state, action) => {
      let limit = JSON.parse(localStorage.getItem("limit"));
      const newData = { id: limit, ...action.payload };
      state.data = [...state.data, newData];
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    deleteProduct : (state, action) =>{
        let data = JSON.parse(localStorage.getItem('data'))
        data = data.filter((item) => item.id !== action.payload)
        localStorage.setItem("data", JSON.stringify(data));
        state.data = data
        localStorage.setItem('limit', JSON.stringify(JSON.parse(localStorage.getItem('limit')) - 1))
    },
    editProduct : (state, action) =>{
        let index = state.data.findIndex((data) => data.id === action.payload.id)
        state.data[index] = action.payload
        localStorage.setItem('data', JSON.stringify(state.data))
    },
    setEdit : (state, action) =>{
        state.edit = action.payload
    },
    getSingleProduct : (state, action) =>{
        state.singleProduct = state.data.filter((data) => data.id === action.payload)[0]
    }
  }
});

export const { addProduct, deleteProduct, getSingleProduct, setEdit, editProduct } = productSlice.actions;
