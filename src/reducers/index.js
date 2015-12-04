import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import darkLords from './darkLords';

const rootReducer = combineReducers({
  darkLords,
});

export default rootReducer;