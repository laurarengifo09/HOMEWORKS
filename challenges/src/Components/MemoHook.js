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
        <hr />
        <h4>{memo}</h4>
        <h4>{memo}</h4>
        <button
        className="btn btn-primary"
        onClick={()=>handleAdd()}
        
        
        >+1</button>






        </>
    )
}