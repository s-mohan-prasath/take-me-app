import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
let state = {};
let slice = createSlice({
  name: "notes",
  initialState: state,
  reducers: {
    noteAdded: (notes, action) => {
      notes[action.payload.id] = {
        id:action.payload.id,
        name: action.payload.name,
        content: action.payload.content,
        lastModified: action.payload.lastModified,
        starred: action.payload.starred,
      };
    },
    noteStarred: (notes, action) => {
      notes[action.payload.id] = { ...notes[action.payload.id], starred: true };

    },
    noteUnStarred: (notes, action) => {
      notes[action.payload.id] = {
        ...notes[action.payload.id],
        starred: false,
      };
    },
  },
});
export const { noteAdded, noteStarred, noteUnStarred } = slice.actions;
export default slice.reducer;
