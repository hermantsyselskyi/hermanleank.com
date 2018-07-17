import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* addStore (action){
    console.log('in addStore',action.payload);
    try {
    yield call( axios.post, '/api/store',action.payload);
    yield put({type: 'GET_STORE'});
} catch (error){
    console.log('Error in addStore:', error)
}
}
function* getStore(){
    try {
        let response = yield call(axios.get, '/api/store');
        yield put({type: 'STORE_STORE', payload: response.data})
    } catch (error) {
        console.log('Error in getStore');
    }
}

function* storeSaga(){
    yield takeEvery('GET_STORE', getStore);
    yield takeEvery('ADD_STORE', addStore);
}

export default storeSaga;