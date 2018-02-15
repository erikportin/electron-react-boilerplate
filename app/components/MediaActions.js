// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayPauseActions from '../actions/playPause';
import { ipcRenderer } from 'electron';

type Props = {
  playPause: () => void
};

class MediaActions extends Component<Props> {
  props: Props;

  componentDidMount() {
    const {
      playPause
    } = this.props;

    ipcRenderer.on('mediaplaypause', () => {
        playPause();
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayPauseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaActions);