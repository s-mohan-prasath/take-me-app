import { createSlice } from "@reduxjs/toolkit";
let state=[]
const slice = createSlice({
    name:'trash',
    initialState:state,
    reducers:{
        trashEmptied:(trash,action)=>{
            trash=[];
        }
    }
})
export const { trashEmptied } = slice.actions;
export default slice.reducer;