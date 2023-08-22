import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice"

const appStore = configureStore({
    reducer: {
        appReducer: appReducer
    }
})

export default appStore