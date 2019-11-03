import { createStore } from 'redux';

function inbox(state = [], action) {
    let newState = [...state];
    switch(action.type) {
        case "NEW_MESSAGE":
            return [...state, action.payload];

        case "DELETE_MESSAGE":
            return newState.filter(msg => msg.id !== action.idToDelete);
            
        case "EDIT_MESSAGE":
            for (let i = 0; i < newState.length; i++) {
                if(newState[i].id === action.idToEdit) {
                    newState[i].text = action.text;
                }
            }
            return newState;

        default:
            return state;
    }
}

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store = createStore(inbox, reduxDevTools);

export default store;