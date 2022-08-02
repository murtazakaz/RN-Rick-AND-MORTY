const {default: types} = require('../actions/types');
import {call, put, takeLatest, select} from 'redux-saga/effects';
import axiosWrapper from '../../services';
import {getEpisodeSuccess} from '../actions/episodeActions';
function* fetchEpisode(action) {
  const episode = action.payload;

  const params = {
    method: 'GET',
    path: `episode/${episode}`,
  };
  try {
    let result = yield call(axiosWrapper, params);
    if (result?.status === 200 && result?.data) {
      yield put(getEpisodeSuccess(result.data));
    }
  } catch (e) {}
}

module.exports = {
  fetchEpisodeWatcher: function* () {
    yield takeLatest(types.GET_EPISODE, fetchEpisode);
  },
};
