import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false };

const cartSlice =  createSlice({ name: 'cart', initialState: initialCartState, reducers: {
    showCart(state){
        state.showCart = !state.showCart;
    },
    // hideCart(state){
    //     state.showCart = false;
    // },
} });

const store = configureStore({
    reducer: { cart: cartSlice.reducer }
});


export const cartActions = cartSlice.actions
export default store