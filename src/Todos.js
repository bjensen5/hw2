import React, {useState} from 'react'

export default function Todos() {
    const [todo, setTodo] = useState('')

    function handleTodo(evt) {
        setTodo(evt.target.value)
    }

    return(
        <div>
            <h1>
                Create {todo}
            </h1>
            <input type="text" value={todo} onChange={handleTodo} />
        </div>
        )
}

