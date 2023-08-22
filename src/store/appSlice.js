import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: true
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        }
    }
})

export const { toggleSideBar } = appSlice.actions;
export default appSlice.reducer;