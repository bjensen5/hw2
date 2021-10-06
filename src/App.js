import {useState, useReducer, useEffect} from 'react';

import UserBar from './user/UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import appReducer from './reducers';


function App() {

  const initialTodos = [
    {
      title: "old todo",
      description: "Build beautiful art",
      author: "jehovah"
    },
    {
      title: "old todo",
      description: "Make charitable contributions",
      author: "jehovah"
    },
    {
      title: "old todo",
      description: "Buy a Ferrari",
      author: "jehovah"
    },
    {
      title: "old todo",
      description: "Build health and wealth",
      author: "jehovah"
    },
    {
      title: "old todo",
      description: "get gmi money",
      author: "jehovah"
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
