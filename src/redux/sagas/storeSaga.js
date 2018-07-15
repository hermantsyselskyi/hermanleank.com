import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getStore(){
    try {
        let response = yield call(axios.get, '/api/projects');
        yield put({type: 'STORE_STORE', payload: response.data})
    } catch (error) {
        console.log('Error in getProjects');
    }
}

function* sellPieces(action){
        yield call( axios.post, `/api/store/${action.payload}`);
        yield put({type: 'GET_STORE'});
}

function* storeSaga(){
    yield takeEvery('SELL_PIECE', sellPieces);
    yield takeEvery('GET_STORE', getStore)
}

export default storeSaga;