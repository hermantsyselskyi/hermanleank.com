import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getPieces(){
    try {
        const response = yield call(axios.get, '/api/pieces');
        yield put({type: 'STORE_PIECE', payload: response.data})
    } catch (error) {
        console.log('Error in getPieces');
    }
}

function* getSpecPieces(action){
    try {
        const response = yield call(axios.get, `/api/pieces/${action.payload}`);
        yield put({type: 'STORE_SPEC_PIECE', payload: response.data})
    } catch (error) {
        console.log('Error in getSpecPieces');
    }
}

function* addPieces(action){
        console.log('in addPieces');
        try {
            yield call( axios.post,'/api/pieces',action.payload)
            yield put({type: 'GET_PIECE'});
        } catch (error){
            console.log('Error in addPieces:', error)
        }
    }
    
function* deletePieces(action){
    try{
        yield call( axios.delete, `/api/pieces/${action.payload}`);
        yield put({type: 'GET_PIECE'});
    } catch (error){
        console.log('Error in deletePieces');
    }
}
function* editPieces(action){
    try {
        yield call(axios.put, 'api/pieces/', action.payload);
        yield put({type: 'GET_PIECE'});
    } catch (error) {
        console.log('Error in editPieces');
    }
}


function* piecesSaga(){
    yield takeEvery('GET_PIECE', getPieces);
    yield takeEvery('ADD_PIECE', addPieces);
    yield takeEvery('DELETE_PIECE', deletePieces);
    yield takeEvery('GET_SPEC_PIECE', getSpecPieces);
    yield takeEvery('EDIT_PIECE', editPieces);
}

export default piecesSaga;