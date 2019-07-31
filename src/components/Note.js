import React from 'react'
import {remove} from '../actions/notes.actions'




export default props => {
    function deleteNote() {
        remove(props.id)


    }

    return (
                <li>
                    <p>{props.name}</p>
                    <p><button onClick={deleteNote}>delete</button></p>
                    <input type="checkbox" value="false"/>
                </li>

    )
}