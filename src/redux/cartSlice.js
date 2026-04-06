import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    },
    reducers: {
        addToCart: (state, action) => {
            // Get product from payload
            const cartObj = action.payload;

            // Add item to state
            state.items.push(cartObj);

            // Save updated state to localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },

        removedToCart: (state, action) => {
            const id = action.payload;

            // Remove item
            state.items = state.items.filter(item => item.id !== id);

            // Update localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        }
    }
});

export const { addToCart, removedToCart } = cartSlice.actions;
export default cartSlice.reducer;