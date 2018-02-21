// @flow
import { PLAY_PAUSE_DEACTIVATED, PLAY_PAUSE_ACTIVATED } from '../actions/mediaKeys';

export type playPauseKeyActiveStateType = {
  +playPauseKeyActive: boolean
};

type actionType = {
  +type: string
};

export default function playPauseKeyActive(state: boolean = false, action: actionType) {
  switch (action.type) {
    case PLAY_PAUSE_DEACTIVATED:
      return false;
    case PLAY_PAUSE_ACTIVATED:
      return true;
    default:
      return state;
  }
}
