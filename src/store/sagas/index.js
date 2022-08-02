import {all} from 'redux-saga/effects';
import {fetchCharactersWatcher} from './characterSaga';
export default function* root() {
  yield all([fetchCharactersWatcher()]);
}
