import React, {useState, useEffect} from 'react'
import {remove} from '../actions/notes.actions'
import MaterialIcon from 'material-icons-react'

import {modifyNote} from '../actions/notes.actions'

export default props => {

    const [checked, setChecked] = useState(props.checked)
    const [name, setName] = useState(props.name)

    useEffect(() => {
        modifyNote({
            name: name ,
            checked: checked,
            id: props.id 
            
        })
      }, [name, checked, props.id])

    function handleChecked (e) {
        setChecked(!checked)
        // modify()
    }
    // function modify() {
    //     modifyNote({
    //         name: name ,
    //         checked: checked,
    //         id: props.id 
            
    //     })
    // }

    function deleteNote() {
        remove(props.id)
    }

    return (

            <div className="note">
                
                    <div>
                        <textarea onBlur={modifyNote} value={props.name} onChange={e => setName(e.target.value)} className="noteinput"/>
                    </div>
                    <div className="options">
                    <p><button onClick={deleteNote}>X</button></p>
                    
                    <label className="container">
                    <input id={'check' + props.id} type="checkbox" checked={checked} onChange={handleChecked} />
                    {/* <label htmlFor={'check' + props.id} className="replace">
                        <MaterialIcon icon="done" />

                    </label> */}
                    <span htmlFor={'check' + props.id} className="checkmark"></span>
                    </label>
                    
                    
                    
                </div>
                </div>

    )
}