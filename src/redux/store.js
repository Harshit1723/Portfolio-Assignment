import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './DetailSlice';

export const store = configureStore({
    reducer:{
        user:UserReducer,
    }
});

