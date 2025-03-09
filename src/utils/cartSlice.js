import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // items: ["burger","pizza"],
        items: [],
    },
    reducers: {
        //action     //reducer function
        addItem: (state, action) => {
            //Vanialla(older) Redux => DON'T MUTATE STATE , returning was mandatory 
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState

            // We are mutating the state over here
            // Redux Toolkit uses immer BTS
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        //originalState = {items: ["pizza"]}
        clearCart: (state, action) => {
            //RTK - either Mutate the existing  state or return a new State
            // state.items.length = 0; // originalState = []

            return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
