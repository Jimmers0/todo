import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import ContactForm from './ContactForm'
import ContactList from './ContactList'



export default props => {
  return (
    <Provider store={store}>
      <div>
       <ContactForm />
       <ContactList />
      </div>
    </Provider>
  )
}