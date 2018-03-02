import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import albumReducer from './album_reducer';


const rootReducer = combineReducers({
  form,
  album : albumReducer
});

export default rootReducer;
