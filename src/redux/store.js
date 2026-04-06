import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './counterSlice'
import cartSlice from './slice'

export const store = configureStore({
    reducer: {
        countStore:counterSlice,
        cartStore: cartSlice
    }
})