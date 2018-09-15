import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import InputDataReducer from '../view/container/InformationPage/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  inputDataReducer : InputDataReducer
});

export default rootReducer;