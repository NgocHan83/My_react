import React from 'react';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
// eslint-disable-next-line
import sinon from 'sinon';
import informationReducer from '../view/container/InformationPage/reducers';
import InfosPage from '../view/container/InformationPage';

describe('Information form unit test', () => {
  let store;
  let subject;

  beforeEach(() => {
    console.log("information reducer", informationReducer);
    store = createStore(
      combineReducers({
        form: formReducer,
        inputDataReducer : informationReducer
      })
    );

    subject = mount(
      <Provider store={store}>
        <InfosPage />
      </Provider>
    );
  });

  it('Should be defined', () => {
    console.log('subjectsssss', subject);
    expect(subject).toBeDefined();
  });

  it('Should be have the button submit', () => {
    expect(
      subject.containsMatchingElement(<button>Submit</button>)
    ).toBe(true);
  });

  it('Should be have the button submit', () => {
    const inforState = store.getState().infos;
    expect(
      {
        firstName: 'Trinh',
        lastName: 'Han',
        email: 'ttngochan83@gmail.com',
        gender: 'female'
      }
    ).toEqual(inforState.inputData);
  });
})