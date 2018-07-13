import { combineReducers } from 'redux';

const piecesReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_PIECE':
            state = [...state, action.payload];
            break;
      
    }
    return state;
};

export default combineReducers({
    piecesReducer
});