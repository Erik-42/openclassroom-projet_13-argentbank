import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from "../slice/tokenSlice";
import counterReducer from '../slice/counterSlice'
import signReducer from '../slice/signSlice'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    counter: counterReducer,
    sign: signReducer,
  },
})