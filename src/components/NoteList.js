import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import { generateNote, create } from '../actions/notes.actions';



export default props => {
    const notes = useSelector(appState => appState.notes)
    const remainingTasks = useSelector(appState => appState.notes.filter(note => !note.checked).length)
    const [note,setNote] = useState('')


    

    function createNote(e) {
        e.preventDefault()
        create(note)
        generateNote()


    }



    return (

       <div>
           <div className="header">
           <form>
            <input className="enternote" type="textarea" value={note} onChange={e => setNote(e.target.value)} placeholder="* ENTER TASK *"/>
            <button className="createnote" onClick={createNote}>create task</button>
            <div className="remainingtask">Incomplete tasks: {remainingTasks}</div>
        </form>
        </div>
           <div className="notescontainer">
           <ul className="items">
               {notes.map((note, i) => (
                  <Note key={'note' + i}  {...note}/>

               ))}
                
           </ul>
           </div>
       </div>
    )
}