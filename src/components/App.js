import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import NoteForm from './NoteForm'
import NoteList from './NoteList'



export default props => {
  return (
    <Provider store={store}>
      <div>
       <NoteForm />
       <NoteList />
      </div>
    </Provider>
  )
}