import { configureStore } from "@reduxjs/toolkit";
import { carRentalSlice } from "../slice/carRentalSlice";
import { testSlice } from "../slice/testSlice/testSlice";
export const store=configureStore({
    reducer:{
        faqState:carRentalSlice.reducer,
        testToogle:testSlice.reducer
    }
    
})