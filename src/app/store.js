import { configureStore } from "@reduxjs/toolkit";
import meetingReducer from "../features/meetings/meetingSlice";

export const store = configureStore({
  reducer: {
    meetings: meetingReducer,
  },
});