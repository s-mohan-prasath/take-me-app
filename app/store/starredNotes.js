import { createSlice } from "@reduxjs/toolkit";
let state = [];

let slice = createSlice({
  name: "starredNotes",
  initialState: state,
  reducers: {
    starredNoteListAdd: (starredNotes, action) => {
        starredNotes.unshift(action.payload.id);
    },
    starredNoteListRemove: (starredNotes, action) => {
        const index = starredNotes.indexOf(action.payload.id);
        if (index !== -1) {
          starredNotes.splice(index, 1);
        }
      
      },
      
    }});

export const { starredNoteListAdd,starredNoteListRemove } = slice.actions;
export default slice.reducer;