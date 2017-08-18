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
            let index = -1;

            for(let i =0; i < state.length; i++) {

                if(state[i].id === action.id){
                    index = i;

                    break;
                }
            }
            console.log('index is: ', index);
            if(index >= 0) {
                return [...state.slice(0,index),
                    Object.assign({},state[index], action.fields),
                    ...state.slice(index + 1, state.length)]
            } else {
                return state;
            }
        default:
            return state;
    }

}


// we have put all dispatch action into function
function addContact(contact) {
    store.dispatch({
        type:'ADD_CONTACT',
        contact
    })
}

function updateContactByID(id, fields){
    store.dispatch({
        type:'UPDATE_CONTACT_ID',
        id,
        fields
    })
}

function deleteContact(id) {
    store.dispatch({
        type:'DELETE_CONTACT_ID',
        id
    })
}

let store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState())
})

addContact({id: 1, name: 'Manju'})

updateContactByID(1, {place: 'Bengalure'})

deleteContact(1)

/*
// without function this is how you call
store.dispatch({
    type:'DELETE_CONTACT_ID',
    id: 1
})
*/
