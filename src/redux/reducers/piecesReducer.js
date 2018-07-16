import { combineReducers } from 'redux';

const piecesReducer = (state = { piece_id:'',price:'',forsale:'FOR SALE',piecesList:[] }, action) => {
    switch (action.type) {
        case 'PIECE_SET_DONE':
            return {...state, price: action.payload.price, forsale: action.payload.forsale}
        case 'PIECE_SET_ID':
        return   {...state, piece_id: action.payload}
        case 'STORE_PIECE':
            return {...state, piecesList:action.payload}
        default:
            return state;
    }
};

export default combineReducers({
    piecesReducer
});