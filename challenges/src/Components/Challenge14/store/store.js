// import {configureStore} from '@reduxjs/toolkit';
// import {counterSlice} from './counterSlice';

// export const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     },
// })

import { combineReducers, apllyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import {  applyMiddleware } from 'redux';

import { authReducer } from "../reducers/auth";
import { createStoreHook } from "react-redux";

const reducers = combineReducers({
    auth: authReducer,

});

export const store =createStoreHook(
    reducers,
    applyMiddleware(thunk)
)