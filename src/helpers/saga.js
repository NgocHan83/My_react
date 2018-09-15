import { all } from 'redux-saga/effects';
import inputWatchers from '../view/container/InformationPage/saga';

export default function* saga() {
  yield all([
    inputWatchers
  ]);
}