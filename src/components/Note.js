import React, {useState, useEffect, useSelector} from 'react'
import {remove} from '../actions/notes.actions'

import {modifyNote} from '../actions/notes.actions'

export default props => {
    
    const [value, setValue] = useState(props.value)
    const [checked, setChecked] = useState(props.checked)
    

    useEffect(() => {
        modifyNote({
            value: props.value ,
            checked: checked,
            id: props.id 
            
        })
      }, [props.value, checked, props.id])



    function deleteNote() {
        remove(props.id)
    }

    return (

            <div className="note">
                
                   
                    <input value={props.value} onChange={e => setValue(e.target.value)} className="noteinput"/>
                    
                    
                    
                    <div className="options">
                    <p><button type="button" onClick={deleteNote}>X</button></p>
                    

                    <label className="container"> 
                    Check to complete task   
                    <input id={'check' + props.id} type="checkbox" checked={checked} onChange={e => setChecked(!checked)} />
                    <span htmlFor={'check' + props.id} className="checkmark"></span>
                    </label>
                    
                    
                    
                </div>
              
                </div>

    )
}