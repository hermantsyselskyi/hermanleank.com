import { combineReducers } from 'redux';

const storeReducer = (state = {piece_id:''}, action) => {
    switch (action.type) {
        case 'SET_SELL':
            return { piece_id: action.payload }
        case 'STORE_STORE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    storeReducer
});