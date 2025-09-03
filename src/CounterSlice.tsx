import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    reset: (state) => {state.value = 0 },
    incrementByAmount: (state, action) => {state.value += action.payload},
  },
});

