import types from '../actions/types';

const INITIAL_STATE = {listViewType: 'list'};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_LIST_VIEW_TYPE:
      return {
        ...state,
        listViewType: action.payload,
      };

    default:
      return state;
  }
};
