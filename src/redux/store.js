// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Локальне сховище
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// Конфігурація для redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],  // Зберігаємо лише слайс contacts
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ігноруємо PERSIST для серіалізації
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
