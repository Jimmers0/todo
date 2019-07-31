const initialState = {
  notes: []
  
}

export default function(state = initialState, action) {
  switch (action.type) {
     case 'ADD_NOTE':
       return {...state,notes:[action.payload, ...state.notes]}
     case 'REMOVE_NOTE':
       return {...state, notes: state.notes.filter(c => action.payload !== c.id)}
    
     

    default:
      return state
  }
}