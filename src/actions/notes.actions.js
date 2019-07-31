import store from '../store'
import axios from 'axios' 

let id = 1

export function generateNote() {
    id++
}

  export function remove(id) {
    store.dispatch({
      type: 'REMOVE_NOTE',
      payload: id
    })
  }

  export function create(name){
      store.dispatch({
        type: 'ADD_NOTE',
        payload: {name, id}
      })
  }


 



  
  