import { createSlice } from "@reduxjs/toolkit";
let state=[]
const slice = createSlice({
    name:'archive',
    initialState:state,
    reducers:{
        archiveEmptied:(trash,action)=>{
            trash=[];
        }
    }
})
export const { archiveEmptied } = slice.actions;
export default slice.reducer;