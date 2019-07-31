import store from '../store'
import axios from 'axios' 

let id = 1

export function generateContact() {
    id++
}

  export function remove(id) {
    store.dispatch({
      type: 'REMOVE_CONTACT',
      payload: id
    })
  }

  export function create(name){
      store.dispatch({
        type: 'ADD_CONTACT',
        payload: {name, id}
      })
  }


 



  
  