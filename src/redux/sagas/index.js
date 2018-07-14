import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import piecesSaga from './piecesSaga';
import projectSaga from './projectsSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    piecesSaga(),
    projectSaga()
  ]);
}
