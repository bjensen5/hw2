import React, { useState } from "react";

import Todo from "./Todo";

export default function CreateTodo({todos, setTodos}) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    function handleTitle(evt) {
        setTitle(evt.target.value)
    }
    function handleDescription(evt) {
        setDescription(evt.target.value)
    }
    function handleCreate() {
        const newTodo = { title, description }
        setTodos([ newTodo, ...todos])
    }

    return (
        <form onSubmit= {e => { e.preventDefault(); } } >
            <div>Description: <b>{todos}</b></div>
            <div>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>

            <textarea value={description} onChange={handleDescription} />
            <br/>
            <input type="submit" value="create" onChange={handleCreate}  />
        </form>
    )
}