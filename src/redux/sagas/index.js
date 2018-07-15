import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import piecesSaga from './piecesSaga';
import projectsSaga from './projectsSaga';
import storeSaga from './storeSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    piecesSaga(),
    projectsSaga(),
    storeSaga()
  ]);
}
