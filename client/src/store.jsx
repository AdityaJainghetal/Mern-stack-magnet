import { configureStore } from '@reduxjs/toolkit';


// Use Redux-presist
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react


import cardReducer from "./cardSlice";

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, cardReducer);

const store= configureStore({
    reducer:{
      // mycard:cardReducer
      mycard:persistedReducer
    }
})

export default store;  

export const persistor = persistStore(store);