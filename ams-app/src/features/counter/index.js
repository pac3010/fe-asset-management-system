import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        value2:0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, payload) => {
            state.value = state.value + payload;
        },

    }
})

export const {increment, decrement, incrementByValue} = counterSlice.actions

export default counterSlice.reducer;