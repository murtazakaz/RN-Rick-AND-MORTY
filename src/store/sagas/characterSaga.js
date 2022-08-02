const {default: types} = require('../actions/types');
import {call, put, takeLatest, select} from 'redux-saga/effects';
import axiosWrapper from '../../services';
import {getCharacterSuccess} from '../actions/characterActions';
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
    }
  } catch (e) {}
}

module.exports = {
  fetchCharactersWatcher: function* () {
    yield takeLatest(types.GET_CHARACTERS, fetchCharacters);
  },
};
