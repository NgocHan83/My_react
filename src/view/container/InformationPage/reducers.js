import { INPUT_DATA_INF_START } from './constants';

const initialState = {
  inputData: {
    firstName: 'Trinh',
    lastName: 'Han',
    email: 'ttngochan83@gmail.com',
    gender: 'female'
  }
};

const inputDataReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INPUT_DATA_INF_START:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          gender: action.gender
        }
      }
    default:
      return state;
  }
};

export default inputDataReducer;