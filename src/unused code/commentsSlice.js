import { createSlice } from "@reduxjs/toolkit";

let initialState = {comments:[],
    isCommentsShowing: false
}
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
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
        resetCommentState(state) {
            Object.assign(state, initialState)
        },

    }

}
)

export default commentsSlice.reducer;

export const { setComments, toggleComments, resetCommentState } = commentsSlice.actions;

export const selectComment = state => state.comments.comments;
export const selectIsCommentsShowing = state => state.comments.isCommentsShowing;
