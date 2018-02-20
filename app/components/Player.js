// @flow
import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import styles from './Player.css';

type Props = {
  activate: () => void,
  deactivate: () => void,
  playPauseKeyActive: boolean
};

export default class Player extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.injectScript = this.injectScript.bind(this);
  }

  componentDidMount() {
    const {
      activate
    } = this.props;

    ipcRenderer.on('mediaplaypause', () => {
      activate();
    });

    this.webview.addEventListener('dom-ready', () => {
      this.webview.openDevTools();
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    if (this.props.playPauseKeyActive) {
      this.injectScript();
      this.props.deactivate();
    }
  }

  injectScript() {
    this.webview.executeJavaScript('console.log("playPause")');
  }

  render() {
    return (
      <webview
        id="webview-guest"
        src="http://www.bbc.co.uk/programmes/b09s37vt"
        disablewebsecurity="true"
        className={styles.container}
        ref={(webview) => { this.webview = webview; }}
      />
    );
  }
}
