import { combineReducers } from 'redux';
import usersErrorsReducer from './users_errors_reducer';
import authErrorsReducer from './auth_errors_reducer';

const errorsReducer = combineReducers({
  user: usersErrorsReducer,
  auth: authErrorsReducer
});

export default errorsReducer;