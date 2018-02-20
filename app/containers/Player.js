import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import * as PlayerActions from '../actions/playpause';

function mapStateToProps(state) {
  return {
    playPauseKeyActive: state.playpause
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
