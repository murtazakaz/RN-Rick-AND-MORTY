import types from '../actions/types';

const INITIAL_STATE = {data: {}};

export default (state = INITIAL_STATE, action) => {
  let _data = {...state.data};
  switch (action.type) {
    case types.GET_EPISODE_SUCCESS:
      if (Array.isArray(action.payload)) {
        action.payload.map(item => (_data[item.id] = item));
      } else {
        _data[action.payload.id] = action.payload;
      }

      return {
        ...state,
        data: _data,
      };

    default:
      return state;
  }
};
