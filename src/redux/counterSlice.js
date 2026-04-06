import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            count: 1,
        },
        reducers: {
            increament: (state, action) => {
                state.count = state.count + 1;
            },
            decreament: (state, action) => {
                state.count = state.count - 1;
            }
        }

    }
)

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
