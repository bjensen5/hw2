import React, {useState, useEffect, useContext} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'

import { useNavigation } from 'react-navi'

export default function CreateTodo () {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    const navigation = useNavigation();

    const [ dateCreated, setDateCreated ] = useState('')

    const { state, dispatch } = useContext(StateContext)
    const { user } = state;

    const [ todo, createTodo ] = useResource(({ title, description }) => ({
        url: '/todo',
        method: 'post',
        headers: {"Authorization": `${state.user.access_token}`},
        data: { title, description }
    }))
    

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleCreate() {
        createTodo({ title, description })
    }

    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated: Date().toString(), completed: false, id: todo.data.id })
            console.log(todo.data)
            navigation.navigate(`/todo/${todo.data.id}`)
        }
    }, [todo])

     return (
          <form onSubmit={e => {e.preventDefault(); handleCreate(); } }>
             
             <div>Do you have any <i> new todos</i> <b>{user.username}</b> ? </div> < br />

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
 