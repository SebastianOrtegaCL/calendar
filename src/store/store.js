import { configureStore } from "@reduxjs/toolkit";
import {uiSlice} from "./ui/uiSlice";
import {calendarSlice} from "./calendar/calendarSlice.js";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    }
});