import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import projectsReducer from '../reducers/projectsReducer';

function* fetchAll(){
    try {
        const items = yield call(axios.get, '/api/projects');
        yield put({type: 'STORE_ITEMS', payload: items.data})
    } catch (error) {
        console.log('Error in fetchAll projectsReducer GET');
    }
}


function* addProjects(action){
        console.log('in addItem');
        try {
            yield call( axios.post,'/api/projects',action.payload)
            yield put({type: 'FETCH_ALL'});
        } catch (error){
            console.log('Error in addProjects:', error)
        }
    }
    
function* deleteProjects(action){
    try{
        yield call( axios.delete, `/api/projects/${action.payload}`);
        yield put({type: 'FETCH_ALL'});
    } catch (error){
        console.log('Error in deleteProjects');
    }
}

function* projectsSaga(){
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('ADD_PROJECT', addProjects);
    yield takeEvery('DELETE_PROJECT', deleteProjects);
}

export default projectsSaga;