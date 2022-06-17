import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'posts',
    initialState: {posts:[]},
    reducers: {
        setData: (state, action) => {
           
        //console.log(action.payload)

        state.posts.push( {
            id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
            comments: action.payload.comments,
            subreddit: action.payload.subreddit,
            url: action.payload.url,
            text: action.payload.text,
            image: action.payload.img

        })
        //console.log(state.posts)
    }

        //console.log(state)
       
        }
        
    }
)

export default dataSlice.reducer;

export const { setData } = dataSlice.actions;

export const selectPosts = state => state.data.posts;


