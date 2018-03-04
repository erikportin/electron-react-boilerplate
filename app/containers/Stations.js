import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Stations from '../components/Stations';
import * as StationsActions from '../actions/stations';

function mapStateToProps(state) {
  return {
    stations: state.stations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(StationsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
