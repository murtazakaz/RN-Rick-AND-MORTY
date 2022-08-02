import * as characterActions from './characterActions';
import * as episodeActions from './episodeActions';
import * as settingActions from './settingActions';
module.exports = {
  ...characterActions,
  ...episodeActions,
  ...settingActions,
};
