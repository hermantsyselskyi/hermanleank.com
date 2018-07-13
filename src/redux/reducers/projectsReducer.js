import { combineReducers } from 'redux';

const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            state = [...state, action.payload];
            break;
      
    }
    return state;
};

export default combineReducers({
    projectsReducer
});