import React, {useState, useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';

import UserBar from './user/UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import appReducer from './reducers';
import Header from './Header'


import { StateContext} from './Contexts'


function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

 

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

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
         <Header text="Todo App" />

        <UserBar />

        <br/><br/><hr/><br/> 

        {user && <CreateTodo /> }
        <TodoList />

      </StateContext.Provider>
    </div>
  )
}

export default App;
