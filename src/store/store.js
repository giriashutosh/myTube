import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice"
import suggestionReducer from "./suggestionSlice"
import chatReducer from "./chatSlice"

const appStore = configureStore({
    reducer: {
        appReducer: appReducer,
        suggestionHistory: suggestionReducer,
        chat: chatReducer
    }
})

export default appStore