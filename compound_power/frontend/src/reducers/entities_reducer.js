import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  entities: usersReducer
});

export default entitiesReducer;