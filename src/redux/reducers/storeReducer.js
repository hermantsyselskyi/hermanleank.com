import { combineReducers } from 'redux';

const storeReducer = (state = {open: false, piece_id:'',storeList:[]}, action) => {
    switch (action.type) {
        case 'STORE_SET_ID':
            return   {...state, piece_id: action.payload}
        case 'STORE_STORE':
            return {...state, storeList: action.payload}

        case 'OPEN_SELL':
            return {...state, open: true }
        case 'CLOSE_SELL':
            return {...state, open: false }


        default:
            return state;
    }
};

export default combineReducers({
    storeReducer
});