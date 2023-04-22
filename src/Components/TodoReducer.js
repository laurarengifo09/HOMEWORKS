
import React, { useState } from 'react'

export const actions = {
  ADD: 'add',
  REMOVE: 'rm',
  DONE: 'done'
}

export const TodoReducer = (initialState = [], action) => {
  switch (action.type) {
    case actions.ADD:
      return [...initialState, {
        id: new Date().getTime(),
        description: action.payload, 
        done: false
      }]
    case (actions.REMOVE):
      const newState = initialState.filter((x) => x.id !== action.payload)
      return newState
    case (actions.DONE):
      const doneState = initialState.map((todo) => {
        if(todo.id === action.payload) return {...todo, done: true}
        return todo
      })
      return doneState
    default:
      return initialState;
  }
}




// export const TodoReducer =(initialState,action) =>{
//     switch(action.type){
//         case '[TODO] ADD TODO':
//             return [... initialState, action.payload];
//         case '[TODO] REMOVE TODO':
//             return initialState.filter(i => i.id != action.id);
//         default:
//             return initialState;    

//     }
// }