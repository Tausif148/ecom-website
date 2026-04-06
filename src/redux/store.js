import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './counterSlice'
import cartSlice from './ccartSlice'

export const store = configureStore({
    reducer: {
        countStore:counterSlice,
        cartStore: cartSlice
    }
})