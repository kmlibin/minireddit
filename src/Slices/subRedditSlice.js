import { createSlice } from "@reduxjs/toolkit";

export const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState: { subreddits: [] },
    reducers: {
        setSubReddit: (state, action) => {

            //console.log(action.payload)

            state.subreddits.push({
                icon: action.payload.icon,
                url: action.payload.url,
                displayName: action.payload.displayName,
                id: action.payload.id

            })
   // console.log(state)
        }
        
    }

}
)

export default subRedditSlice.reducer;

export const { setSubReddit } = subRedditSlice.actions;

export const selectSR = state => state.subReddit.subreddits;
