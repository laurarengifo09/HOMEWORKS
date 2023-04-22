import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name : 'auth',
    initialState :{
        status:"logout",
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers:{
        register: (state, action)=>{
            state.email = action.payload.email
            state.status = 'registered'
            state.errorMessage = ""
        },
        login: (state, action)=>{
            state.email = action.payload.email
            state.status = 'logged'
            state.errorMessage = ""
        },
        logout: (state, action) =>{
            state.email = null
            state.status = 'logout'
            state.errorMessage = ""
        },
        checkingCredentials: (state,action) => {
            state.errorMessage = action.payload.errorMessage}
    }

})

export const {register, logout, login, checkingCredentials} = authSlice.actions