import { configureStore } from "@reduxjs/toolkit";
import { carRentalSlice } from "../slice/carRentalSlice";
export const store=configureStore({
    reducer:{
        faqState:carRentalSlice.reducer,
    }
    
})