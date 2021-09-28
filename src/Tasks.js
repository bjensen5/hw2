import React, {useState} from 'react'

export default function Tasks() {
    const [todo, setTask] = useState('todo')

    function handleNameChange(evt) {
        setTask(evt.target.value)
    }

    return(
        <div>
            <h1>
                Create {todo}
            </h1>
            <input type="text" value={todo} onChange={handleNameChange} />
        </div>
        )
}

