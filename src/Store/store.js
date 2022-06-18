import {configureStore} from '@reduxjs/toolkit'

//import reducers
import setDataReducer from '../Slices/dataSlice'
import setSubRedditReducer from '../Slices/subRedditSlice'

const store = configureStore({
    reducer: {
      data: setDataReducer,
      subReddit: setSubRedditReducer
    },
  })
  export default store
