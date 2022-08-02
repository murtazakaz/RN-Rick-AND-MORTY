import {combineReducers} from 'redux';
import character from './charactersReducer';
import episodes from './episodeReducer';
import settings from './settingReducer';
export default combineReducers({character, episodes, settings});
