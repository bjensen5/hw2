import React, {useState} from 'react'

export default function Username() {
    const [name, setName] = useState('master')

    function handleNameChange(evt) {
        setName(evt.target.value)
    }

    return(
        <div>
            <h1>
                Hello {name}
            </h1>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
        )
}

