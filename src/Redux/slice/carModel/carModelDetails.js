import { createSlice } from "@reduxjs/toolkit";
import { allCarData } from "./carModelDummyData";
export const carModelSlice=createSlice({
    initialState:[allCarData[3],[true,true,true,false,true,true]],
    name:"carModelToogle",
    reducers:{
        toogleDetail:((state,action)=>{
           let newarray=state[1].map((e,i)=>{
            if(i===action.payload)
            return false;
            return true;
           })
            return [allCarData[action.payload],newarray]
        })
        
    }
})