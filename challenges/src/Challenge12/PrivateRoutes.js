import React,{useContext} from "react";
import { useLocation } from "react-router";
import { UserContext } from "../Context/UserContext";
import { LoginPage } from "./LoginPage";


export const PrivateRoutes =({children})=>{
    const {logged} = useContext(UserContext)
    const {pathname,search }= useLocation();
    localStorage.setItem('lastPath',`${pathname}${search}`)
    console.log(logged);
    return logged ? children: <LoginPage mss="Ingrese Primero"></LoginPage>
}