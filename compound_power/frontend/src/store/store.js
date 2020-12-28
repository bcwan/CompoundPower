import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => (
//   createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)))
// );

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

// export default configureStore;
export default store;