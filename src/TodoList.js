import React from 'react'
import Todo from './Todo'

export default function TodoList ({todos = []}) {
     return (
      <div>
       {todos.map((p, i) => <Todo {...p} title={p.title} author={p.author}  key={'todo-' + i} />)}
      </div> 
      )
}
    
