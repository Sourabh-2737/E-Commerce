import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async() =>{
    try {
        let limit = JSON.parse(localStorage.getItem('limit'))
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log(error);
    }
});

export const addProduct = createAsyncThunk('addProduct', async(payload) =>{
    try {
        let limit = JSON.parse(localStorage.getItem('limit'))
        const response = await fetch(`https://dummyjson.com/products/${limit}`, {
            method : "PUT",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log(error);
    }
});

export const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        loading : false
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