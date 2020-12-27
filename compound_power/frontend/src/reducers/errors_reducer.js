import { combineReducers } from 'redux';
import usersErrorsReducer from './users_errors_reducer';
import authErrorReducer from './auth_error_reducer';

const errorsReducer = combineReducers({
  user: usersErrorsReducer,
  auth: authErrorReducer
});

export default errorsReducer;