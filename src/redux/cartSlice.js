import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    },
    reducers: {
        // Add to Cart
        addToCart: (state, action) => {
            // Get product from payload
            const cartObj = action.payload;

            // Add item to state
            state.items.push(cartObj);

            // Save updated state to localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },

        // Remove from Cart
        removedToCart: (state, action) => {
            const id = action.payload;

            // Remove item
            state.items = state.items.filter(item => item.id !== id);

            // Update localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.items));;
        },

        changeQty: (state, action) => {
                const { id, finalQty } = action.payload;
                state.items = state.items.filter((item) => {
                    if (item.id === id) {
                        item.qty = finalQty;
                    }
                    return item;
                })
                localStorage.setItem("cartItems", JSON.stringify(state.items));
        }


    }
});

export const { addToCart, removedToCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;