import React, { useCallback, useReducer } from 'react'
import { TodoReducer, actions } from './TodoReducer'
import { TodoList } from "./TodoList";
import { TodoInputs } from "./TodoInputs";

const inicialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(TodoReducer, inicialState)

  const handleNewTodo = useCallback(
    (todo) => {
      const action = {
        type: actions.ADD,
        payload: todo
      }
      dispatch(action)
    },
    [],
  )

  const removeTodo = useCallback(
    (todo) => {
      const action = {
        type: actions.REMOVE,
        payload: todo.id
      }
      dispatch(action)
    }, []
  )


  return (
    <div>
      <h1>TodoApp <small> Pendientes: 2 </small></h1>
      <hr />

      <div>
        <div>
          <TodoList removeTodo={removeTodo} todos={todos}></TodoList>
        </div>
        <div>
          <TodoInputs onNewTodo={handleNewTodo}></TodoInputs>
        </div>
      </div>

    </div>
  )
}