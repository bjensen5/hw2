import React, { useState } from "react";

import Todos from "./Todos";
import UserBar from "./user/Userbar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";


function App() {

  const [ user, setUser ] = useState('')

  const initialTodos = [
    {
      title: "New To-do 1",
      description: "This is the description for new task #1. Have fun accomplishing and being great!",
      dateCreated: "09/27/2021",
      complete: "incomplete",
      dateCompleted: ""
    },
    {
      title: "New To-do 2",
      description: "This is the description for new to-do #2. Have fun learning and being a really amazing person!",
      dateCreated: "09/28/2021",
      complete: "incomplete",
      dateCompleted: ""
    }
  ]

  const [ todos, setTodos ] = useState(initialTodos)

  return (
  <div>
    <UserBar user={user} setUser={setUser} />
    <hr/>
    <Todos />
    <br />
    { user && <CreateTodo user={user} todos={todos} setTodos={setTodos} /> }
    <TodoList todos={initialTodos} />
  </div>

  
  )
}

export default App;
