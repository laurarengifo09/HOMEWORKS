import { async } from "@firebase/util"
import { auth } from "../../Components/Firebase"

export const registerAuth =(email, password)=>{
    return async(dispatch)=>{
        const response = await createUserWidthEmailAndPassword(auth, email, password)
        if (response){
            await updateProfile(auth.currentUser,{
                displayName: 'Laura',
                photoUrl: ''
            })
            const {email} = response.user 
            dispatch (register({email}))
        }else{
            throw new Error('login failed')
        }
    }
}