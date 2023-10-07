import { configureStore } from '@reduxjs/toolkit'
import viewer from "./viewer";
import {TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        viewer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatch: () => AppDispatch = useReduxDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector