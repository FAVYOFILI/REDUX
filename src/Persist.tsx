import { configureStore } from "@reduxjs/toolkit";
import {CounterSlice} from "./CounterSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, CounterSlice.reducer)

export const store = configureStore({
    reducer: {
        counter: persistedReducer
    }
})

export const persistor = persistStore(store);

