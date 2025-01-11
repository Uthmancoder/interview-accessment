import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import userDetails from "./userDetails";

// Configure persist settings
const persistConfig = {
  key: "root", // The key for the root-level storage
  storage, // Define the storage system
};

// Combine reducers
const rootReducer = combineReducers({
  personalInfo: userDetails,
});

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
});

// Export persistor
export const persistor = persistStore(store);
