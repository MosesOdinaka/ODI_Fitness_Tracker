import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userSlice";

/**
 * Configuration object for redux-persist.
 * Defines the key for the persisted state, version, and storage method.
 */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

/**
 * Root reducer combining all the reducers in the application.
 * Currently, it only includes the user reducer.
 */
const rootReducer = combineReducers({
  user: userReducer,
});

/**
 * Persisted reducer created using the persistConfig and rootReducer.
 * Enables state persistence across page reloads and sessions.
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Configures and creates the Redux store.
 * Adds middleware to handle redux-persist actions for state persistence.
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Creates and configures the persistor object.
 * Used to persist and rehydrate the Redux store state.
 */
export const persistor = persistStore(store);
