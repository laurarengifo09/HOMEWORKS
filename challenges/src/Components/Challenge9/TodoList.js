import React from 'react'
import { TodoItem } from './TodoItem'


 export const TodoList = ({todos}) => {
    return (
        <div>
          <ul>{todos.map((todo, key) => {
            return (<TodoItem todo={todo} key={key}/>)
          })}
          </ul>
        </div>
      )
}

