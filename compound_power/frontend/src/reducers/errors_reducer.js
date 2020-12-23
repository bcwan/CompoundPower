import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer'

const errorsReducer = combineReducers({
  user: userErrorsReducer
});

export default errorsReducer;