const {default: types} = require('../actions/types');
import _ from 'lodash';
import {call, put, takeLatest, select} from 'redux-saga/effects';
import axiosWrapper from '../../services';
import {getEpisodeNumber, getURLParams} from '../../utils/helper';
import {getCharacterSuccess} from '../actions/characterActions';
import {getEpisode} from '../actions/episodeActions';
function* fetchCharacters(action) {
  const page = action.payload || 1;

  const params = {
    method: 'GET',
    path: `character/?page=${page}`,
  };
  try {
    let result = yield call(axiosWrapper, params);
    if (result?.status === 200 && result?.data) {
      const {info, results} = result.data;
      yield put(getCharacterSuccess({info, results, page}));

      let episodes = [];
      for (let i in results) {
        if (results[i].episode.length) {
          episodes.push(getEpisodeNumber(results[i].episode[0]));
        }
      }
      episodes = _.uniq(episodes).join();
      if (episodes) {
        yield put(getEpisode(episodes));
      }
    }
  } catch (e) {}
}

module.exports = {
  fetchCharactersWatcher: function* () {
    yield takeLatest(types.GET_CHARACTERS, fetchCharacters);
  },
};
