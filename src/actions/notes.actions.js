import store from '../store'

let id = 1


  export function remove(id) {
    store.dispatch({
      type: 'REMOVE_NOTE',
      payload: id
    })
  }

  export function create(note){
    console.log('note', note)
      store.dispatch({
        type: 'ADD_NOTE',
        payload: {
          value: note, 
          id: id, 
          checked: false
        }
      })
      id++
  }

  export function modifyNote(note) {
    store.dispatch({
      type: 'MODIFY_NOTE',
      payload: {
        value: note.value,
        id: note.id,
        checked: note.checked
      }
    })
  }


 



  
  