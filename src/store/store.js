import { configureStore } from "@reduxjs/toolkit";
import {uiSlice} from "./ui/uiSlice";
import {calendarSlice} from "./calendar/calendarSlice.js";
import {authSlice} from "./auth/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});