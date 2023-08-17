import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./state/togleMenu"

export const store = configureStore({
    reducer: {
        menu: menuReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
