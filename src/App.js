import {useState, useReducer, useEffect} from 'react';

import MyName from './MyName'
import UserBar from './user/UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import appReducer from './reducers';
import react from 'react'

function App() {

  const initialTodos = [
    {
      title: "My Post",
      content: "Some text",
      author: "Paul"
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul"
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul"
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul"
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Paul"
    }
  ]

  //const [ posts, setPosts ] = useState(initialPosts)

  // const [ user, dispatchUser ] = useReducer(userReducer, '')
  // const [ posts, dispatchPosts] = useReducer(postReducer, initialPosts)

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialTodos })

  const {user, todos} = state;

  useEffect(() => {
    if (user) {
       document.title = `${user}’s Todos` 
     } else {
       document.title = 'Todos'
   }
  }, [user])



  return (
    <div>
      <UserBar user={user} dispatchUser={dispatch} />
    <br/><br/><hr/><br/> 
      {user && <CreateTodo user={user} dispatch={dispatch} /> }
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
