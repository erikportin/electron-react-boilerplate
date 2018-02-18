// @flow
import { PLAY_PAUSE_DEACTIVATED, PLAY_PAUSE_ACTIVATED } from '../actions/playpause';

export type playpauseStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

export default function playpause(state: boolean = false, action: actionType) {
  switch (action.type) {
    case PLAY_PAUSE_DEACTIVATED:
      return false;
    case PLAY_PAUSE_ACTIVATED:
      return true;
    default:
      return false;
  }
}
