import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isCommentsShowing: false
    },
    reducers: {
        setComments: (state, action) => {

            //console.log(action.payload)

            state.comments.push({
                time: action.payload.time,
                author: action.payload.author,
                text: action.payload.text

            })
            // console.log(state)
        },
        toggleComments: (state) => {
            state.isCommentsShowing = !state.isCommentsShowing;
        },

    }

}
)

export default commentsSlice.reducer;

export const { setComments, toggleComments } = commentsSlice.actions;

export const selectComment = state => state.comments.comments;
export const selectIsCommentsShowing = state => state.comments.isCommentsShowing;
