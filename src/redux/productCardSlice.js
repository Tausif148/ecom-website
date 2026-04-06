import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk
export const fetchProduct = createAsyncThunk(
    'products/fetch',
    async () => {
        const res = await fetch('https://dummyjson.com/products?limit=20');
        const jsonRes = await res.json();
        // console.log(jsonRes);
        return jsonRes.products;
    }
);



// Slice
const productCardSlice = createSlice({
    name: "productCard",
    initialState: {
        products: [],
        status: 'undefined',   // better default
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    },

    reducers: {
        addProduct: (state, action) => {

        },
        removeProduct: (state, action) => {

        }
    },
});

// exports
export const { addProduct, removeProduct } = productCardSlice.actions;
export default productCardSlice.reducer;