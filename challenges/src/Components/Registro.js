import React from 'react'
import {useDispatch} from 'react-redux';
import { useForm } from '../hooks/useForm';

const Registro = () => {

    const dispatch =useDispatch()

    const {email, password, onInputChange, formState} = useForm({
        email:'rengifolaura09@gmail.com',
        password:'1234'

    })





  return (
    <>
    </>
  )
}

export default Registro