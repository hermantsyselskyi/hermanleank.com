import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getStore(){
    try {
        let response = yield call(axios.get, '/api/store');
        yield put({type: 'STORE_STORE', payload: response.data})
    } catch (error) {
        console.log('Error in getStore');
    }
}

function* sellPieces(action){
        yield call( axios.post, `/api/store/${action.payload}`);
        yield put({type: 'GET_STORE'});
}

function* storeSaga(){
    yield takeEvery('SET_PRICE', sellPieces);
    yield takeEvery('GET_STORE', getStore);
    yield takeEvery('PIECE_SET_DONE', sellPieces);
}

export default storeSaga;