import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const suggestionSlice = createSlice({
    name: 'suggest',
    initialState,
    reducers: {
        cachedSuggestions: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { cachedSuggestions } = suggestionSlice.actions
export default suggestionSlice.reducer