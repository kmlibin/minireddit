import { createSlice, current } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: "feed",
    initialState:[],
    reducers: {
        setData: (state, action) => {
        // console.log(action.payload)
        state.push([{...action.payload}])
        // console.log(current(state))
        // console.log(current(state[0][0]))  
        }
        
    }
})

export const { setData } = dataSlice.actions;
export const setDataReducer = dataSlice.reducer;


