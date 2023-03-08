import { createSlice } from "@reduxjs/toolkit";
let state = {};

let slice = createSlice({
  name: "notebooks",
  initialState: {},
  reducers: {
    notebookAdded: (notebooks, action) => {
      notebooks[action.payload.id] = {
        name: action.payload.name,
        desc: action.payload.desc,
        tagList: action.payload.tagList,
        noteList:action.payload.noteList,
      };
    },
  },
});

export const { notebookAdded } = slice.actions;
export default slice.reducer;