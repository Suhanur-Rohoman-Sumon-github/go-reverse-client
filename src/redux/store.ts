import { configureStore } from '@reduxjs/toolkit'
import counterslice from './fetures/counterslice'
import authSlice from './fetures/auth/auth.slice'
import { baseApi } from './api/baseApi'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import checkoutSlice from './fetures/checkout/checkout.slice'
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authSlice)
export const store = configureStore({
  reducer: {
    counter: counterslice,
    auth: persistedReducer,
    checkout:checkoutSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export   const persistor = persistStore(store)