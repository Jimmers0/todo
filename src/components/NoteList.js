import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'

export default props => {
    const notes = useSelector(appState => appState.notes)


    return (
       <div>
           <ul>
               {notes.map((note, i) => (
                  <Note key={'note' + i}  {...note}/>

               ))}
                
           </ul>
       </div>
    )
}