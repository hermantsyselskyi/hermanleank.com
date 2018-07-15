import { combineReducers } from 'redux';

const storeReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_STORE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    storeReducer
});