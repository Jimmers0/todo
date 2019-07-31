import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact'

export default props => {
    const contacts = useSelector(appState => appState.contacts)


    return (
       <div>
           <ul>
               {contacts.map((contact, i) => (
                  <Contact key={'contact' + i}  {...contact}/>

               ))}
                
           </ul>
       </div>
    )
}