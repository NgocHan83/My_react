import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers/stores';
import './index.css';
import App from './App';
import InformationContainer from '../src/view/container/InformationPage/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <InformationContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
