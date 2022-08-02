import types from './types';

export const getCharacters = payload => ({
  type: types.GET_CHARACTERS,
  payload,
});

export const getCharacterSuccess = payload => ({
  type: types.GET_CHARACTERS_SUCCESS,
  payload,
});

export const markFavoriteCharacter = payload => ({
  type: types.MARK_FAVORITE,
  payload,
});
