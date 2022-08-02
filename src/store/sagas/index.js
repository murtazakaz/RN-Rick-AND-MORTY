import {all} from 'redux-saga/effects';
import {fetchCharactersWatcher} from './characterSaga';
import {fetchEpisodeWatcher} from './episodeSaga';
export default function* root() {
  yield all([fetchCharactersWatcher(), fetchEpisodeWatcher()]);
}
