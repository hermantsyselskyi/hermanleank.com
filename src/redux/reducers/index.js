import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

import piecesReducer from './piecesReducer';
import projectsReducer from './projectsReducer';
import storeReducer from './storeReducer';

const store = combineReducers({
  user,
  login,
  piecesReducer,
  projectsReducer,
  storeReducer
});

export default store;
