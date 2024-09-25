import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "./slice/ProductSlice";

export default configureStore({
  reducer: {
    productList: ProductSlice,
    // similary we can ahve more slice based on the requremnets, slice is nothing but variables and
    // list of operation is maintain in reducers
  },
})









