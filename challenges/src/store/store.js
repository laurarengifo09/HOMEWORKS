import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './silces/auth/AuthSlices';

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    },
})