import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ViewerState, ViewAuthMode} from "./types";
import {User} from "@firebase/auth";

const initialState: ViewerState = {
    viewer: null,
    viewMode: null,
}

export const viewerSlice = createSlice({
    name: 'viewer',
    initialState,
    reducers: {
        setViewer: (state, action: PayloadAction<User>) => {
            state.viewer = action.payload;
        },
        setViewMode: (state, action: PayloadAction<ViewAuthMode>) => {
            state.viewMode = action.payload;
        }
    },
})

export const { setViewer, setViewMode } = viewerSlice.actions
export { ViewAuthMode };

export default viewerSlice.reducer
