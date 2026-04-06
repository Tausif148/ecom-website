import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './counterSlice'
import productCardSlice from "./productCardSlice"
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        countStore: counterSlice,
        productCardStore: productCardSlice,
        cartStore: cartSlice
    }
})