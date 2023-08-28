import { createSlice } from "@reduxjs/toolkit"
import { textLimit } from "../utils/constant"
const initialState = {
    messages: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length > textLimit) state.messages.splice(0,1)
            state.messages.push(action.payload)
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer