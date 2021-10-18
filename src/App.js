import React, {useState, useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';

import UserBar from './user/UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import appReducer from './reducers';
import Header from './Header'
import ChangeTheme from './ChangeTheme';

import { ThemeContext, StateContext} from './Contexts'


function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

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

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })


  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos])

  const {user} = state;

  const [ theme, setTheme ] = useState({
    primaryColor: 'black',
    secondaryColor: 'green'
  })

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Header text="Todo App" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBar />

          <br/><br/><hr/><br/> 

          {user && <CreateTodo /> }
          <TodoList />

        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
