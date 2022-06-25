import { createSlice } from "@reduxjs/toolkit";

let initialState = {posts:[],
link: ''}
export const dataSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setData: (state, action) => {
         //console.log(action.payload)

            state.posts.push({
                id: action.payload.id,
                title: action.payload.title,
                author: action.payload.author,
                comments: action.payload.comments,
                subreddit: action.payload.subreddit,
                permalink: action.payload.permalink,
                text: action.payload.text,
                image: action.payload.img,
                media: action.payload.media,
                timeStamp: action.payload.timeStamp,
                upVotes: action.payload.ups
            })
        },
            resetState(state) {
                Object.assign(state, initialState)
            },
            setCommentLink: (state, action) => {
                console.log(action.payload)
                state.link = action.payload
            }

    }
}
)

export default dataSlice.reducer;

export const { setData, resetState, setCommentLink } = dataSlice.actions;

export const selectPosts = state => state.data.posts;
export const selectPostName = state => state.data.posts.map(post => post.subreddit)
export const selectCommentLink = state => state.data.link


