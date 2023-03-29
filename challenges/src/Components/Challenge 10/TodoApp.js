import React from 'react'
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import  {useTodo}  from '../../hooks/useTodo';


export const TodoApp = () => {
  const {todos, handleNewTodo, removeTodo, doneTodo, countPendingTodos} = useTodo();

  return (
    <div>
      <h1>TODOAPP </h1>
        {/* {countTodos}, */}
         <h2> Tareas Pendientes: {countPendingTodos} </h2>
      <hr />

      <div>
        <div>
          <TodoList doneTodo={doneTodo} removeTodo={removeTodo} todos={todos}></TodoList>
        </div>
        <div>
          <TodoInput onNewTodo={handleNewTodo}></TodoInput>
        </div>
      </div>

    </div>
  )
}


