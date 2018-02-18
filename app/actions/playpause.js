// @flow
export const PLAY_PAUSE_ACTIVATED = 'PLAY_PAUSE_ACTIVATED';
export const PLAY_PAUSE_DEACTIVATED = 'PLAY_PAUSE_DEACTIVATED';

type actionType = {
  +type: string
};

export function activate() {
  return {
    type: PLAY_PAUSE_ACTIVATED
  };
}

export function deactivate() {
  return {
    type: PLAY_PAUSE_DEACTIVATED
  };
}
