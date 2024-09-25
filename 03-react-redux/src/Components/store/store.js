import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slice/CounterSlice";
import CartSlice from "../slice/CartSlice";


const store = configureStore({

    reducer: {
        counter: CounterSlice, // 'counter' is the slice name for counterReducer
        cart: CartSlice       // 'cart' is the slice name for cartReducer
      }
})

export default store;

