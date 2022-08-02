import {URL_REGEX} from './regex';

const getURLParams = url => {
  let params = {},
    match;
  while ((match = URL_REGEX.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
};

export {getURLParams};
