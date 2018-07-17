import { combineReducers } from 'redux';

const piecesReducer = (state = { pieces_id:'',price:'',forsale:'',piecesList:[],specPiecesList:[]}, action) => {
    switch (action.type) {
        case 'PIECE_SET_DONE':
            return {...state, price: action.payload.price, forsale: action.payload.forsale}
        case 'PIECE_SET_ID':
        return   {...state, pieces_id: action.payload}
        case 'STORE_PIECE':
            return {...state, piecesList: action.payload}
        case 'STORE_SPEC_PIECE':
            return {...state, specPiecesList: action.payload}
        default:
            return state;
    }
};

export default combineReducers({
    piecesReducer
});