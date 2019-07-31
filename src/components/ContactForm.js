import React, { useState } from 'react'
import { generateContact, create } from '../actions/contacts.actions';

export default props => {
    const [name,setName] = useState('')
    

    function createNote(e) {
        e.preventDefault()
        create(name)
        generateContact()


    }

    
    return (
        <form>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder=" note"/>
            <button onClick={createNote}>make note</button>
        </form>
    )
}