import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async() =>{
    try {
        const response = await fetch('https://dummyjson.com/products?limit=4')
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log(error);
    }
})

export const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        loading : true
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchProducts.pending, (state) =>{
            state.loading = true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) =>{
            state.loading = false
            state.data = action.payload.products
        });
    }
})