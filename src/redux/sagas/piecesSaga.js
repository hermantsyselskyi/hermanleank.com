import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* fetchAll(){
    try {
        const items = yield call(axios.get, '/api/pieces');
        yield put({type: 'STORE_ITEMS', payload: items.data})
    } catch (error) {
        console.log('Error in fetchAll shelfSaga GET');
    }
}


function* addItem(action){
        console.log('in addItem');
        try {
            yield call( axios.post,'/api/pieces',action.payload)
            yield put({type: 'FETCH_ALL'});
        } catch (error){
            console.log('Error in addItem:', error)
        }
    }
    
function* deleteItem(action){
    try{
        yield call( axios.delete, `/api/pieces/${action.payload}`);
        yield put({type: 'FETCH_ALL'});
    } catch (error){
        console.log('Error in deleteItem shelfSaga');
    }
}

function* shelfSaga(){
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('ADD_PIECE', addItem);
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default shelfSaga;