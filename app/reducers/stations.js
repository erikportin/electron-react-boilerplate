import { persistentReducer } from 'redux-pouchdb';
import { REMOVE_STATION, ADD_STATION } from '../../app/actions/stations';

export type stationStateType = {
  name: url,
  url: string,
  script: string
};

export type stationsStateType = {
  +stations: Array<stationStateType>
};

type actionType = {
  +type: string
};

export const initialState = [
  {
    url: 'http://www.bbc.co.uk/programmes/b09s37vt',
    name: 'BBC 6',
    script: `var iFrame = document.querySelectorAll('.episode-playout iframe')[0].contentDocument;
    var pauseBtn = iFrame.querySelectorAll('.p_pauseButton')[0];
    var playBtn = iFrame.querySelectorAll('.p_playButton')[0];
    var startBtn = iFrame.querySelectorAll('.p_button')[0];
    
    
    if(pauseBtn){
        pauseBtn.click()
    }
    else if(playBtn){
        playBtn.click()
    }
    else if(startBtn){
        startBtn.click()
    }`
  }
];

const stations = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STATION:
      return [
        ...state,
        action.station
      ];
    case REMOVE_STATION:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
};

export default persistentReducer(stations);
