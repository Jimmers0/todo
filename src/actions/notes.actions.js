import store from '../store'


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
        payload: {name, id, checked: false}
      })
  }

  export function modifyNote(note) {
    store.dispatch({
      type: 'MODIFY_NOTE',
      payload: {
        id: note.id,
        name: note.name,
        checked: note.checked
      }
    })
  }


 



  
  