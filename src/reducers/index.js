import { combineReducers } from 'redux';
import EmailReducer from './emailReducer.js'

const rootReducer = combineReducers({
  email: EmailReducer
});

export default rootReducer;
