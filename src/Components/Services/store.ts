import { configureStore } from '@reduxjs/toolkit'
import { apiFirst } from './api'

const store = configureStore({
  reducer: {
    [apiFirst.reducerPath]: apiFirst.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiFirst.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
