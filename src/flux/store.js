import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer/rootReducer';

export default function initializeStore() {
  const initialize = applyMiddleware(thunk)(createStore);
  const store = initialize(rootReducer);
  return store;
}
