import React, { useContext, useEffect } from 'react'
import { Link } from 'react-navi'
import { Card, Button } from 'react-bootstrap'
import { ThemeContext, StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

function Todo ({ title, description, dateCreated, completed, dateCompleted, todoId }) {

     const {secondaryColor} = useContext(ThemeContext);
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
              dateCompleted: Date(dateCompleted).toLocaleDateString('en-us')
          }
     }));

     useEffect(() => {
          if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
                dispatch({type: 'DELETE_TODO', todoId: todoId})
          }
     }, [deletedTodo])

     useEffect(() => {
          if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
                dispatch({ type: 'TOGGLE_TODO', complete:toggledTodo.data.complete, dateCompleted:toggledTodo.data.dateCompleted, todoId })
          }
     }, [toggledTodo])

  
     return (
          <Card>
          <Card.Body>
              <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
         
              </Card.Subtitle>
              <Card.Text>
                  {description}
              </Card.Text>
              
               <input type="checkbox" checked={completed} onChange={e => {toggleTodo(todoId, e.target.checked)}} />
               <Button variant="link" onClick={(e) => {deleteTodo(todoId)}}>Delete Todo</Button>
              {completed && <i>Completed on: {new Date(dateCompleted).toLocaleDateString('en-us')}</i>}
            
          </Card.Body>
          </Card>

 )
}

export default React.memo(Todo);
