import React from 'react'
import Todo from './Todo'

import { StateContext } from './Contexts'
import { useContext } from 'react/cjs/react.development'

export default function TodoList () {
      const { state } = useContext(StateContext);
      const { todos } = state;

     return (
      <div>
       {todos.map((p, i) => <Todo {...p} title={p.title} author={p.author}  key={'todo-' + i} todoId={i}/>)}
      </div> 
      )
}
    
