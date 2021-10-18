import React, { useContext } from 'react'
import { ThemeContext, StateContext } from './Contexts'

export default function Todo ({ title, description, dateCreated, completed, dateCompleted, todoId }) {

     const {socondaryColor} = useContext(ThemeContext);
     const {dispatch} = useContext(StateContext);

     return (
          <div>
               <h3>{title}</h3>
               <div>{description}</div>
               <br />
               <div><i>created on:</i><br />{dateCreated}</div>
               <input type="checkbox" onClick={e => {dispatch({type: 'TOGGLE_TODO', completed: !completed, todoId: todoId})}} />
               <button onClick={(e) => {dispatch({type: 'DELETE_TODO', todoId: todoId})}}>Delete Todo</button>
               {completed && <><br /><i>todo completed on: {new Date(dateCompleted).toLocaleDateString('en-us')}</i><br /></>}
               <hr/>
          
          </div> 
     )
}
