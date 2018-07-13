import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

import piecesReducer from './piecesReducer';
import projectsReducer from './projectsReducer';
 
const store = combineReducers({
  user,
  login,
  piecesReducer,
  projectsReducer
});

export default store;
