import { createSlice } from "@reduxjs/toolkit";
let state = [];

let slice = createSlice({
  name: "notebookList",
  initialState: state,
  reducers: {
    notebookListAdd: (notebookList, action) => {
      notebookList.push(action.payload.id);
    },
  },
});

export const { notebookListAdd } = slice.actions;
export default slice.reducer;