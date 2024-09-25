import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name: 'cartItems',

    initialState: {
        items: [] // List of items
    },

    reducers:{

        addToCart: (state,action)=>{
            state.items.push(action.payload)
        },
        removeFromCart: (state,action)=>{
            state.items.pop()
        },
        incrementQuantityInCart: (state,action)=>{
            const{ itemId,amount } = action.payload
            const item = state.items.find(item => item.id === itemId);
            if (item) {
                item.quantity = item.quantity + amount;
            }
        },
        removeCartById: (state,action)=>{
            // createing new state by excluding action.itemId
            state.items = state.items.filter(item => item.itemId != action.payload.itemId )
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantityInCart, removeCartById } = CartSlice.actions;
export default CartSlice.reducer;