import React, { useContext, useEffect } from 'react'
import { Link } from 'react-navi'
import { Card, Button } from 'react-bootstrap'
import { ThemeContext, StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

function Todo ({ title, description, dateCreated, completed, dateCompleted, todoId }) {

     const {socondaryColor} = useContext(ThemeContext);
     const {dispatch} = useContext(StateContext);

     const [deletedTodo, deleteTodo] = useResource((todoId) => ({
          url: `/todos/${todoId}`,
          method: "delete"
     }));
  
     const [toggledTodo, toggleTodo] = useResource((todoId, completed) => ({
          url: `/todos/${todoId}`,
          method: "patch",
          data: {
              complete:completed,
              completedOn: Date(dateCompleted).toLocaleDateString('en-us')
          }
     }));

     useEffect(() => {
          if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
                dispatch({type: 'DELETE_TODO', todoId: todoId})
          }
     }, [deletedTodo])

     useEffect(() => {
          if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
                dispatch({ type: 'TOGGLE_TODO', complete:toggledTodo.data.complete, completedOn:toggledTodo.data.completedOn, todoId })
          }
     }, [toggledTodo])

  
     return (
          <Card>
          <Card.Body>
              <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
              <i>Todoer <b>{author}</b></i>
              </Card.Subtitle>
              <Card.Text>
                  {description}
              </Card.Text>
              
               <input type="checkbox" checked={complete} onChange={e => {toggleTodo(todoId, e.target.checked)}} />
               <Button variant="link" onClick={(e) => {deleteTodo(todoId)}}>Delete Todo</Button>
              {complete && <i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i>}
            
          </Card.Body>
          </Card>

 )
}

export default React.memo(Todo);
