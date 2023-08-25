import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice"
import suggestionReducer from "./suggestionSlice"
const appStore = configureStore({
    reducer: {
        appReducer: appReducer,
        suggestionHistory : suggestionReducer
    }
})

export default appStore