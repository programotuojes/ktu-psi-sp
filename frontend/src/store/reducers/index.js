import { combineReducers } from 'redux';
import sidebar from './sidebar';
import productPage from './productPage';

export default combineReducers({
  sidebar,
  productPage,
});
