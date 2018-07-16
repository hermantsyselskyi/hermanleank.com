import { combineReducers } from 'redux';

const storeReducer = (state = {piece_id:'',storeList:[]}, action) => {
    switch (action.type) {
        case 'STORE_SET_ID':
            return   {...state, piece_id: action.payload}
        case 'STORE_STORE':
            return {...state, storeList: action.payload}
        default:
            return state;
    }
};

export default combineReducers({
    storeReducer
});