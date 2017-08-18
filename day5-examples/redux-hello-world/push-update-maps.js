
// Not DONE

var redux = require('redux');


//intial value to be 0 or it will be error
function reducer(state = [], action) {
    //console.log('Reducer called', state, action);
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, action.contact];
        case 'DELETE_CONTACT_INDEX':
            return [
                ...state.slice(0, action.index),
        ...state.slice(index + 1, state.length)];
        case 'DELETE_CONTACT_ID':
            return state.filter(contact => contact.id !== action.id)
        case 'UPDATE_CONTACT_ID':
            return [];
        default:
            return state;
    }

}

let store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type:'ADD_CONTACT',
    contact: {
        id: 1,
        name: 'Manju'
    }
})

store.dispatch({
    type:'DELETE_CONTACT_ID',
    id: 1
})

store.dispatch({
    type:'UPDATE_CONTACT_ID',
    id: 1,
    fields: {
        place: 'Bengaluru'
    }
})

