import {configureStore} from '@reduxjs/toolkit'

//import reducers
import { setDataReducer } from '../Slices/dataSlice'

export const store = configureStore({
    reducer: {
        data: setDataReducer
    }
})

export default store