import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from '../hooks/useForm';
import { logout,register,login } from './Challenge14/store/slices/AuthSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { registerAuth, loginAuth } from './Challenge14/store/slices/Thunks';
import { auth } from './Challenge14/Firebase/Firebase'

export const Registro = () => {

    const dispatch = useDispatch()
    const {status, errorMessage} = useSelector( state => state.auth)
    const [islogin, setLogin] = useState(false)
    const [isLogout, setLogout] = useState(true)

    const {email, password, onInputChange, formState} = useForm({
        email:'rengifolaura09@gmail.com',
        password:'1234'

    })

    const onSubmit = event => {
      event.preventDefault()
      if(islogin)
        dispatch( loginAuth(email, password) );
      else
        dispatch( registerAuth(email, password));
        
      if(status != "logout")
        setLogout(false);
        
    }


    useEffect(()=>{
      onAuthStateChanged(auth, async (user)=>{
        if(!user) return dispatch(logout());
      })
    },[])

    useEffect(()=>{
      if(status != "logout")
        setLogout(false);
      else
        setLogout(true);
    },[status])

  return (
    <>
      {isLogout?<div>
        <h1>Inicie</h1>
        <p>{errorMessage}</p>
        <hr />
          <form onSubmit={e => onSubmit(e)}>
          <input name='email' type='email' onChange={ e => onInputChange(e)} value={email}/>
          <input name='password' type='password' onChange={ e => onInputChange(e)} value={password}/>
        
          <button type='submit' onClick={()=>setLogin(true)}>Login</button>
          <button type='submit' onClick={()=>setLogin(false)}>Registro</button>
        </form>
      </div>:<div>
        <h1>Estas Adentro</h1>
        <button onClick={()=>dispatch(logout())}>Salir</button>
      </div>}
    </>
  )
}
