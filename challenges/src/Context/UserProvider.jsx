import { useState } from "react";
import { UserContext } from './UserContext'


export const UserProvider =({children})=>{
     const [logged, isLogged]= useState();
     return(
        <UserContext.Provider value = {{ logged, isLogged }}>
            {children}
        </UserContext.Provider>

     )
}