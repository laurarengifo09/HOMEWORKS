import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut  } from "firebase/auth"
import { auth } from "../../Firebase/Firebase"
import { register, login, logout, checkingCredentials } from "./AuthSlice"

export const registerAuth =(email, password)=>{
    return async(dispatch) => {
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            if (response){
                await updateProfile(auth.currentUser,{
                    displayName: 'Laura',
                    photoUrl: ''
                })
                const {email} = response.user 
                dispatch (register({email}))
            }else{
                
                throw new Error('register failed')
            }
        }catch(err){
            const errorMessage = err.message
            dispatch(checkingCredentials({errorMessage}))
        }

    }
}


export const loginAuth =(email, password)=>{
    return async(dispatch) => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response){
                const {email} = response.user 
                dispatch (login({email}))
            }else{
                console.log(response)
                throw new Error('login failed')
            }
        }catch(err){
            const errorMessage = err.message
            dispatch(checkingCredentials({errorMessage}))
        }

    }
}

export const logOutAuth = ()=>{
    return async(dispatch) => {
        try{
            const response = await signOut(auth)
            if (response){
                console.log("entro")
                await updateProfile(auth.currentUser,{
                    displayName: 'Laura',
                    photoUrl: ''
                })
                const {email} = response.user 
                dispatch (logout({email}))
            }else{
                console.log(response)
                throw new Error('logout failed')
            }
        }catch(err){
            const errorMessage = err.message
            dispatch(checkingCredentials({errorMessage}))
        }

    }
}