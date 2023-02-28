import {useState} from 'react'


 export const Counter =({sum})=>{
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
   

    

    return(
        <div className='FirstApp'>
        <h1>Counter</h1>
        
        <p>{counter}</p>
        <button onClick={()=>handleSubstract()}>-1</button>
        <button onClick={()=>handleReset()}>Reset</button>
        <button onClick={()=>handleAdd()}>+1</button>
        
        

        
        </div>
    )

}