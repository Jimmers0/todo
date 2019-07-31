import React from 'react'
import {remove} from '../actions/contacts.actions'




export default props => {
    function deleteContact() {
        remove(props.id)


    }

    return (
                <li>
                    <p>{props.name}</p>
                    <p><button onClick={deleteContact}>delete</button></p>
                    <input type="checkbox" value="false"/>
                </li>

    )
}