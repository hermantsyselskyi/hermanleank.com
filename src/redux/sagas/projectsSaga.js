import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getProjects(){
    try {
        let response = yield call(axios.get, '/api/projects');
        yield put({type: 'STORE_PROJECT', payload: response.data})
    } catch (error) {
        console.log('Error in getProjects');
    }
}


function* addProjects(action){
        console.log('in addProjects');
        try {
            yield call( axios.post,'/api/projects',action.payload)
            yield put({type: 'GET_PROJECT'});
        } catch (error){
            console.log('Error in addProjects:', error)
        }
    }
    
function* deleteProjects(action){
    try{
        yield call( axios.delete, `/api/projects/${action.payload}`);
        yield put({type: 'GET_PROJECT'});
    } catch (error){
        console.log('Error in deleteProjects');
    }
}

function* projectsSaga(){
    yield takeEvery('GET_PROJECT', getProjects);
    yield takeEvery('ADD_PROJECT', addProjects);
    yield takeEvery('DELETE_PROJECT', deleteProjects);
}

export default projectsSaga;