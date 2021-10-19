import React, {useState} from 'react'
import { useContext } from 'react/cjs/react.development'
import { StateContext } from './Contexts'

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ dateCreated, setDateCreated ] = useState('')

    const { state, dispatch } = useContext(StateContext)
    const { user } = state;
    

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }


     return (
          <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title, description, author: user});} }>
             
             <div>Do you have any <i> new todos</i> <b>{user}</b> ? </div> < br />

             <div>
                 <label htmlFor="create-title">Title:</label><br />
                 <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" />
             </div>

             <label htmlFor="create-description">Description:</label><br />
             <textarea value={description} onChange={handleDescription} />

             <br />
             <input type="submit" value="Create" />
         </form>   
          )
 }
 