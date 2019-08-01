import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import { create } from '../actions/notes.actions';



export default props => {
    const notes = useSelector(appState => appState.notes)
    const remainingTasks = useSelector(appState => appState.notes.filter(note => !note.checked).length)
    const [note,setNote] = useState('')
    
    function createNote(e) {
        e.preventDefault()
        create(note)
        setNote('')
        
    }

    return (

       <div>
           <div className="header">
           <form onSubmit={createNote}>
            <input className="enternote" type="textarea" value={note} onChange={e => setNote(e.target.value)} placeholder="* ENTER TASK *"/>
            {/* <button className="createnote" onClick={createNote}>create task</button> */}
            <button style={{display:'none'}} type="submit">Submit</button>
            </form>

            <div className="remainingtask">Incomplete tasks: {remainingTasks}</div>
            
        </div>
        <div>
           <ul className="items">
               {notes.map((note, i) => {

                   console.log(note)
                  return <Note key={'note' + i}  {...note}/>
               })}
                
           </ul>
          
           
       </div>
       </div>
       
    )
}