import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterReducer';
import authReducer from './auth/auth-slice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

// const persistConfig = {
// key: 'root',
// storage,
// }

// export const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
// reducer: persistedReducer,
// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);