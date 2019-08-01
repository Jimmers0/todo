const initialState = {
  notes: []
  
}

export default function(state = initialState, action) {
  switch (action.type) {
     case 'ADD_NOTE':
       return {...state,notes:[action.payload, ...state.notes]}
     case 'REMOVE_NOTE':
       return {...state, notes: state.notes.filter(c => action.payload !== c.id)}
       case 'MODIFY_NOTE':
      return {
        ...state, 
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note),
      }
    
     

    default:
      return state
  }
}