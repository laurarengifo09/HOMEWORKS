//Challenge 6
import React, { useEffect, useState } from 'react'

export const useFetch = ( url, body, method ) => {

    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async (url) => {
        try{
            const api = await fetch( url, {
                body: body? JSON.stringify(body) : null,
                method: method? method : body? 'POST' : 'GET'
              })
            const data = await api.json()
    
            setEstado({
                data,
                isLoading: false,
                hasError: null
            })
        }catch(err){
            setEstado({
                data: null,
                isLoading: false,
                hasError: err.message
            })
        }

    }

    useEffect(() => {
        getFetch(url)
    }, [url])
    
    return {
        ...estado
    }
}
