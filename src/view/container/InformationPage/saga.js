import { takeEvery, put } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { INPUT_DATA_INF_START } from './constants';


function* inputDataInfWorker() {
  try {
    yield put(reset('informationForm'));
  } catch (err) {
    throw (err)
  }
}

const inputWatchers = [
  takeEvery(INPUT_DATA_INF_START, inputDataInfWorker)
];

export default inputWatchers;