import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

import piecesReducer from './piecesReducer';
import projectsReducer from './projectsReducer';
import storeReducer from './storeReducer';
import editReducer from './editReducer';

const store = combineReducers({
  user,
  login,
  piecesReducer,
  projectsReducer,
  storeReducer,
  editReducer
});

export default store;
