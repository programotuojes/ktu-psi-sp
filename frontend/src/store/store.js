import { compose, createStore } from 'redux';
import reducers from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const store = createStore(reducers, composeEnhancers());
