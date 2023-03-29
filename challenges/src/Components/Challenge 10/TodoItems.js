import React from 'react'
import { useTodo } from '../../hooks/useTodo';

export const TodoItem = ({doneTodo, removeTodo, todo}) => {

  return (
    <li>
  <span 
        onClick={() => doneTodo(todo)}
        className={`cursor-pointer ${todo.done ? "line-through" : ""}`}
        style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
        {todo.description}
      </span>
      <button onClick={() => removeTodo(todo)}> Borrar </button>
    </li>)
}

