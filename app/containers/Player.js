import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import * as MediaKeysAction from '../actions/mediaKeys';

function mapStateToProps(state, props) {
  const { id } = props.match.params;
  return {
    playPauseKeyActive: state.playPauseKeyActive,
    station: state.stations[id]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MediaKeysAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
