import types from './types';

export const getEpisode = payload => ({
  type: types.GET_EPISODE,
  payload,
});

export const getEpisodeSuccess = payload => ({
  type: types.GET_EPISODE_SUCCESS,
  payload,
});
