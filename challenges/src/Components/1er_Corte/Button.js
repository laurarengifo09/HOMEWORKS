
import React from 'react'
import PropTypes from "prop-types";
import {useState} from "react"
import { useCounter } from '../hooks/useCounter';


export const Button = ({title, sum}) => {

  const {handleAdd, handleReset, handleSubstract, counter} = useCounter(sum)

  return (
    <>
        <h1> { title } </h1>
        <div>
          <span>{ counter }</span>
        </div>
        <button onClick={ () => handleAdd()} > +1 </button>
        <button onClick={ () => handleSubstract()}> -1 </button>
        <button onClick={ () => handleReset()}> Reset </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
}

Button.defaultProps = {
  title: "Counter",
  sum: 0
}

