import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './counterSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        countStore:counterSlice,
        cartStore: cartSlice
    }
})