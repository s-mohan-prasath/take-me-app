import { createSlice } from "@reduxjs/toolkit";
let state = {};
let slice = createSlice({
  name: "tags",
  initialState: state,
  reducers: {
    tagAdded: (tags, action) => {
      tags[action.payload.id] = {
        name: action.payload.name,
        desc: action.payload.desc,
        noteList: action.payload.noteList,
      };
    },
  },
});
export const { tagAdded } = slice.actions;
export default slice.reducer;