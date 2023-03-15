import React,{useState,useMemo} from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff =(iterations)=>{
    for(let i=0; i<iterations; i++){
        console.log('vamos en',i);
    }

    return `${iterations} realizadas`

}

export const MemoHook=()=>{
    const {counter, handleAdd} = useCounter(10);
    const memo =useMemo(()=>heavyStuff(counter),[counter])

    return(
        <>
        <h1>MEmo Hook </h1>





        </>
    )
}