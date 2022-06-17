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
            thumbnail: action.payload.thumbnail,
            author: action.payload.author,
            comments: action.payload.comments
        })
        console.log(state.posts)
    }

        //console.log(state)
       
        }
        
    }
)

export default dataSlice.reducer;

export const { setData } = dataSlice.actions;

export const selectPosts = state => state.data.posts;


