import React,{useState} from "react";
import {useCounter} from '../hooks/useCounter'
import { Small } from "./Small";

export const Memorize =()=>{
    const {counter, handleAdd} = useCounter(10);
    const [first, setfirst] = useState(10);

    return(
        <>
        <h1>Memorize <Small value={counter}/></h1>
        <hr />
        <button
        className="btn btn-primary"
        onClick={()=>handleAdd()}
        >+1</button>
        
        <button
        className="btn btn-primary"
        onClick={()=>setfirst(20)}
        
        >+1</button>
        
        </>
    )
}