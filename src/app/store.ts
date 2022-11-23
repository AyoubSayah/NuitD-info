import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../modules/contactus/slices/authSlice'
import { landingAsyncSlice } from '../modules/home/slices/landingAsyncSlice'
import { globalApi } from './globalAsync'

export const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    landing: landingAsyncSlice.reducer,
    authentification: authSlice.reducer,

    // [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
