import { createSlice } from "@reduxjs/toolkit";
import {arrayOfFaQ} from "./data"
export const carRentalSlice=createSlice({
    initialState:arrayOfFaQ,
    name:"faqState",
    reducers:{
        toogle:((state,action)=>{
            console.log(action.payload);
            state.map((e,i)=>{
                if(action.payload===e.id){
                   e.toogle=!e.toogle;
                }else{
                    e.toogle=true;
                }
              return e;
            })
        })

    }
})