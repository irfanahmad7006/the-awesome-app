import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
 
 
const combinedReducer = combineReducers({
    auth: authReducer
})
 
export const store = configureStore({
 
    reducer: combinedReducer
 
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;