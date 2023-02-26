import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
let state = {};
let slice = createSlice({
  name: "notes",
  initialState: state,
  reducers: {
    noteAdded: (notes, action) => {
      notes[action.payload.id] = {
        name: action.payload.name,
        content: action.payload.content,
        lastModified: action.payload.lastModified,
      };
    },
  },
});
export const { noteAdded } = slice.actions;
export default slice.reducer;
