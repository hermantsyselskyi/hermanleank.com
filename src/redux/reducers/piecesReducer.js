import { combineReducers } from 'redux';

const piecesReducer = (state = { open: false, openSell: false, openEdit: false, openDelete: false ,pieces_id:'',price:'',forsale:'',piecesList:[],specialPiece:{
    name:'',
    image_url:'',
    description:'',
    project_id: '',
    price: '',
    forsale: '',
    isOnStore: '',
    id: ''
}}, action) => {
    switch (action.type) {
        case 'PIECE_SET_DONE':
            return {...state, price: action.payload.price, forsale: action.payload.forsale}
        case 'PIECE_SET_ID':
        return   {...state, pieces_id: action.payload}
        case 'STORE_PIECE':
            return {...state, piecesList: action.payload}
        case 'STORE_SPECIAL_PIECE':
            return {...state, specialPiece: action.payload}
        

        case 'OPEN_ADD':
            return {...state, open: true }
        case 'CLOSE_ADD':
            return {...state, open: false }

        default:
            return state;
    }
};

export default combineReducers({
    piecesReducer
});