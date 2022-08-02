import types from '../actions/types';

const INITIAL_STATE = {info: {}, data: {}};

export default (state = INITIAL_STATE, action) => {
  let _data = {...state.data};
  switch (action.type) {
    case types.GET_CHARACTERS_SUCCESS:
      _data[action.payload.page] = action.payload.results;
      return {
        ...state,
        info: action.payload.info,
        data: _data,
      };

    default:
      return state;
  }
};
