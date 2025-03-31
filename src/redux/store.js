
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], 
};

// Об'єднуємо редюсери
const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filters: filtersReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
