import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import * as MediaKeysAction from '../actions/mediaKeys';

function mapStateToProps(state) {
  return {
    playPauseKeyActive: state.playPauseKeyActive
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MediaKeysAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
