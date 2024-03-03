import { configureStore  ,getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
  key: 'root', 
  storage,
};


const persistedReducer = persistReducer(persistConfig, userSlice);


export const UserStore =configureStore({
    reducer: {
      user: persistedReducer
     
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

export const UserPersistor = persistStore(UserStore) ;

export type AppStore = typeof UserStore;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
