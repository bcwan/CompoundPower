//import errorsReducer from './errors_reducer';
import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import messagesReducer from './messages_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  auth: authReducer
});

export default rootReducer;