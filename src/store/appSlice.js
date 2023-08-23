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
        },
        closeSideBar: (state) => {
            state.isSideBarOpen = false
        }
    }
})

export const { toggleSideBar,closeSideBar } = appSlice.actions;
export default appSlice.reducer;