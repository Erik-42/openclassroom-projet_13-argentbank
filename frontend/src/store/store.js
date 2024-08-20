import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from "./tokenSlice";
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    counter: counterReducer
  },
})