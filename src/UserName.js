import React, {useState} from 'react'

export default function UserName() {

    const [ name, setName ] = useState('')
    const [ lastname, setLastname ] = useState('')

    function handleNameChange(evt){
        setName(evt.target.value)
    }

    function handleLastNameChange(evt) {
        setLastname(evt.target.value)
    }

    return (
        <div>
            <h1>howdy {name} {lastname} </h1>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={lastname} onChange={handleLastNameChange} />

        </div>
    )

}