import { combineReducers } from 'redux';

const piecesReducer = (state = [], action) => {
    switch (action.type) {

        case 'STORE_PIECE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    piecesReducer
});