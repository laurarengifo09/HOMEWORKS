import React, { memo } from "react";

export const Son =memo(
    ({numero,incremenet}) => {
    console.log('again reloaded...');
    return(
        <button
        className="btn btn-primary mr-3"
        onClick={()=>{incremenet(numero)}}
        
        >{numero}
        </button>
    )
})
