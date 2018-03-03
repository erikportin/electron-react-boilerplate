// @flow
export const ADD_STATION = 'ADD_STATION';
export const REMOVE_STATION = 'REMOVE_STATION';

type actionType = {
  +type: string
};

export function add() {
  return {
    type: ADD_STATION
  };
}

export function remove() {
  return {
    type: REMOVE_STATION
  };
}
