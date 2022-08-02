import _ from 'lodash';
import types from '../actions/types';

const INITIAL_STATE = {info: {}, data: {}, favorites: {}};

export default (state = INITIAL_STATE, action) => {
  let _data = {...state.data};
  let _favorites = {...state.favorites};
  switch (action.type) {
    case types.GET_CHARACTERS_SUCCESS:
      _data[action.payload.page] = action.payload.results;
      return {
        ...state,
        info: action.payload.info,
        data: _data,
      };

    case types.MARK_FAVORITE:
      if (_favorites[action.payload.id]) {
        delete _favorites[action.payload.id];
      } else {
        _favorites[action.payload.id] = action.payload;
      }

      return {
        ...state,
        favorites: _favorites,
      };

    default:
      return state;
  }
};
