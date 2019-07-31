const initialState = {
  contacts: []
  
}

export default function(state = initialState, action) {
  switch (action.type) {
     case 'ADD_CONTACT':
       return {...state,contacts:[action.payload, ...state.contacts]}
     case 'REMOVE_CONTACT':
       return {...state, contacts: state.contacts.filter(c => action.payload !== c.id)}
    
     

    default:
      return state
  }
}