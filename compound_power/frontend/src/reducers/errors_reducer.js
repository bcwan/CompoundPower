import { combineReducers } from 'redux';
import usersErrorsReducer from './users_errors_reducer'

const errorsReducer = combineReducers({
  user: usersErrorsReducer
});

export default errorsReducer;