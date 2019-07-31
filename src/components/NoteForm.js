import React, { useState } from 'react'
import { generateNote, create } from '../actions/notes.actions';

export default props => {
    const [name,setName] = useState('')
    

    function createNote(e) {
        e.preventDefault()
        create(name)
        generateNote()


    }

    
    return (
        <form>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder=" note"/>
            <button onClick={createNote}>make note</button>
        </form>
    )
}