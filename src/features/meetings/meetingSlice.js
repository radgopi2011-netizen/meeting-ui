import { createSlice } from "@reduxjs/toolkit";
import { meetings } from "../../data/meetings";

const meetingSlice = createSlice({
  name: "meetings",
  initialState: meetings,

  reducers: {
    addMeeting: (state, action) => {
      state.push(action.payload);
    },

    deleteMeeting: (state, action) => {
      return state.filter(m => m.id !== action.payload);
    }
  }
});

export const { addMeeting, deleteMeeting } = meetingSlice.actions;
export default meetingSlice.reducer;