import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({

    name: 'counter',

    initialState: {
        count : 0
    },

    reducers: {

        increment: (state)=>{
            state.count = state.count + 1
        },
        decrement: (state)=>{
            state.count = state.count - 1
        },
        incrementByValue:(state,action)=>{
            state.count = state.count + action.payload
        },
        reset:(state)=>{
            state.count = 0
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = CounterSlice.actions
export default CounterSlice.reducer

