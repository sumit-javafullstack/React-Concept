import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({

    name:'product',

    initialState: { // array of objects, default value is with category as Programmer
        products: [
            {
                id: 1,
                title: 'Sumit',
                category: 'Programmer'
            }
        ]
    },
    reducers: {

        addProduct: (state,action)=>{
            state.products.push(action.payload)
        },
        removeProductById: (state, action)=>{
            state.products = state.products.filter(product => product.id != action.payload.id)
        },
        getProductById: (state,action)=>{
           
        },
        getProducts: (state,action)=>{
            return state.products;
        }

    }

})


export const { addProduct, removeProductById, getProductById , getProducts} = productSlice.actions

export default productSlice.reducer