import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal += 1;
        },
        decrement: (state) => {
            state.counterVal -= 1;
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload)
        },
        sub: (state, action) => {
            state.counterVal -= Number(action.payload)
        },
    }
})


const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});


export const counterActions = counterSlice.actions
export default counterStore





