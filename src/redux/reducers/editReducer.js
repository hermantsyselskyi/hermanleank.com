import { combineReducers } from 'redux';

const editReducer = (state = { open: false }, action) => {
    switch (action.type) {
        case 'OPEN_EDIT':
            return {...state, open: true }
        case 'CLOSE_EDIT':
            return {...state, open: false }


        default:
            return state;
    }
};

export default combineReducers({
    editReducer
});