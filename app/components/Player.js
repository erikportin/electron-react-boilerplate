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
      //this.webview.openDevTools();
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
    this.webview.executeJavaScript(`var iFrame = document.querySelectorAll('.episode-playout iframe')[0].contentDocument;
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
}`);
  }

  render() {
    return (
      <webview
        data-tid="player"
        src="http://www.bbc.co.uk/programmes/b09s37vt"
        disablewebsecurity="true"
        className={styles.container}
        ref={(webview) => { this.webview = webview; }}
      />
    );
  }
}
