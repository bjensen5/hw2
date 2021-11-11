import React, {useContext} from 'react';
import Todo from './Todo';

import { StateContext } from './Contexts';
import { useContext } from 'react/cjs/react.development';

export default function TodoList () {
      const { state } = useContext(StateContext);
      const { todos } = state;

     return (
      <div>
       {todos.map((t, i) => <Todo {...t} title={t.title} author={t.author}  key={'todo-' + i} todoId={i}/>)}
      </div> 
      )
}
    
