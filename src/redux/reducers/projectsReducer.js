import { combineReducers } from 'redux';

const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_ITEMS':
            return action.payload;
        case 'ADD_PROJECT':
            state = [...state, action.payload];
            break;
      
    }
    return state;
};

export default combineReducers({
    projectsReducer
});