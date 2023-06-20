import { configureStore } from "@reduxjs/toolkit";
import { carRentalSlice } from "../slice/carRentalSlice";
import {carModelSlice } from "../slice/carModel/carModelDetails";
export const store=configureStore({
    reducer:{
        faqState:carRentalSlice.reducer,
        carModelToogle:carModelSlice.reducer
    }
    
})