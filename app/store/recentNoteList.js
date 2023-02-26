import { createSlice } from "@reduxjs/toolkit";
let state = [];

let slice = createSlice({
  name: "recentNoteList",
  initialState: state,
  reducers: {
    recentNoteListAdd: (recentNoteList, action) => {
      recentNoteList.unshift(action.payload.id);
    },
  },
});

export const { recentNoteListAdd } = slice.actions;
export default slice.reducer;