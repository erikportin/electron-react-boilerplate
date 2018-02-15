// @flow
import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string
};

export const PLAY_PAUSE = 'PLAY_PAUSE';

export function playPause() {
  return {
    type: PLAY_PAUSE
  };
}