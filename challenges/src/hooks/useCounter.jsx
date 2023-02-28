import { useState } from "react"

export const useCounter =(sum)=>{
    const [counter, setcounter] = useState(sum)

    const handleAdd =()=>{
        setcounter(counter +1)
    }

    const handleSubstract =()=>{
        setcounter(counter - 1)
    }

    const handleReset =()=>{
        setcounter(sum)
    }

    return {counter, handleAdd, handleReset, handleSubstract}


}