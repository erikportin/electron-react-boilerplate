import stations from '../../app/reducers/stations';
import { REMOVE_STATION, ADD_STATION } from '../../app/actions/stations';

describe('stations', () => {
  it('should handle initial state', () => {
    expect(stations(undefined, {})).toMatchSnapshot();
  });

  it('should add stations', () => {
    let stationsArr = stations([], {
      type: ADD_STATION,
      station: {
        url: 'url.to.station',
        name: 'Name of station',
        script: 'SCRIPT'
      }
    });
    expect(stationsArr.length).toEqual(1);
    stationsArr = stations(stationsArr, {
      type: ADD_STATION,
      station: {
        url: 'url.to.another.station',
        name: 'Name of another station',
        script: 'ANOTHER SCRIPT'
      }
    });
    expect(stationsArr.length).toEqual(2);
    expect(stationsArr[0].name).toEqual('Name of station');
    expect(stationsArr[1].name).toEqual('Name of another station');
  });

  it('should remove stations', () => {
    let stationsArr = stations([
      {
        url: 'url.to.another.station',
        name: 'Name of another station',
        script: 'ANOTHER SCRIPT'
      },
      {
        url: 'url.to.another.station',
        name: 'Name of another station',
        script: 'ANOTHER SCRIPT'
      }
    ], {
      type: REMOVE_STATION,
      id: 1
    });
    expect(stationsArr.length).toEqual(1);

    stationsArr = stations(stationsArr, {
      type: REMOVE_STATION,
      id: 0
    });
    expect(stationsArr.length).toEqual(0);
  });
});
