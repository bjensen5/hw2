import React, {useState, useReducer, useEffect} from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import {Container} from 'react-bootstrap';
import { useResource } from 'react-request-hook';

import UserBar from './user/UserBar';
import CreateTodo from './CreateTodo';
import TodoPage from './pages/TodoPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';
import TodoList from './TodoList';
import appReducer from './reducers';
import Header from './Header';

import { ThemeContext, StateContext} from './Contexts';


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] })

  const {user} = state;

  const [ theme, setTheme ] = useState({
    primaryColor: 'red',
    secondaryColor: 'yellow'
  })

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateTodo /> }),
    '/todo/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
  })

  // useEffect(getTodos, [])
  // useEffect(() => {
  //  if (todos && todos.data) {
  //    dispatch({ type: 'FETCH_TODOS', todos: todos.data })
  //  }
  // }, [todos])

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
                <HeaderBar setTheme={setTheme} />
                <hr />
                <View />
            </Container>
            </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
