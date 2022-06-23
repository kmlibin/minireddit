import {configureStore} from '@reduxjs/toolkit'

//import reducers
import setDataReducer from '../Slices/dataSlice'
import setSubRedditReducer from '../Slices/subRedditSlice'
import setCommentsReducer from '../Slices/commentsSlice'

const store = configureStore({
    reducer: {
      data: setDataReducer,
      subReddit: setSubRedditReducer,
      comments: setCommentsReducer
    },
  })
  export default store
