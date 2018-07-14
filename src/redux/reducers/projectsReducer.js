import { combineReducers } from 'redux';

const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_PROJECT':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    projectsReducer
});