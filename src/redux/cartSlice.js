import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            addToCart: (state, action) => {
                console.log('addToCart action');
            },
            removedToCart: (state, action) => {
                console.log('removedToCart action');
            }
        }

    }
)

export const { addToCart, removedToCart } = cartSlice.actions;
export default cartSlice.reducer;
