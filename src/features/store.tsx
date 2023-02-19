import {configureStore} from '@reduxjs/toolkit';
import { authenticateReducer } from './reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig, authenticateReducer)

export const store = configureStore({
    reducer: {
        authentication:persistedReducer
    }
  })

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;