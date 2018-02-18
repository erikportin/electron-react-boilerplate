// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import * as PlayPauseActions from '../actions/playpause';

type Props = {
  activate: () => void,
  deactivate: () => void
};

type State = {
  isActive: false
};

class MediaActions extends Component<Props> {
  props: Props;

  componentDidMount() {
    const {
      activate
    } = this.props;

    ipcRenderer.on('mediaplaypause', () => {
      activate();
    });
  }

  render() {
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return {
    isActive: false
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayPauseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaActions);
