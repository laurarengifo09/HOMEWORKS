import React,{useContext} from "react";
import { useLocation } from "react-router";
import { UserContext } from "../../../Context/UserContext";


export const PrivateRoutes =({children})=>{
    const {user} = useContext(UserContext)
    const {pathname,search }= useLocation();
    localStorage.setItem('lastPath',`${pathname}${search}`)

    return user ? children: <>ERROR 403</>
}