import {URL_REGEX} from './regex';

const getURLParams = url => {
  let params = {},
    match;
  while ((match = URL_REGEX.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
};

const getEpisodeNumber = eps => {
  if (!eps) {
    return null;
  }
  let episodeNumber = eps.split('/');

  return episodeNumber[episodeNumber.length - 1];
};

const createSearchQueryParams = applyFilters => {
  if (!applyFilters.length) {
    return null;
  }
  const parts = applyFilters.map(param => {
    return (
      encodeURIComponent(param.key) + '=' + encodeURIComponent(param.value)
    );
  });

  return parts.join('&');
};

export {getURLParams, getEpisodeNumber, createSearchQueryParams};
