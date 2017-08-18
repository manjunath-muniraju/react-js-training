var redux = require('redux');


//intial value to be 0 or it will be error
function reducer(state = 0, action) {
    //console.log('Reducer called', state, action);
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }

}

let store = redux.createStore(reducer);
store.subscribe(() => {
    console.log('State Changed', store.getState())
})

store.dispatch({
    type:'INCREMENT'
})

store.dispatch({
    type:'DECREMENT'
})
