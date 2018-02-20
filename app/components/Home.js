// @flow
import React, { Component } from 'react';
import styles from './Home.css';

type Props = {};
type State = {
  domReady: boolean,
  playPause: boolean
};

export default class Home extends Component<Props> {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.injectScript = this.injectScript.bind(this);

    this.state = {
      domReady: false,
      playPause: false
    };
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps', props);
  }

  componentDidMount() {
    this.injectScript();
  }

  injectScript() {
    this.webview.addEventListener('dom-ready', () => {
      console.log('dom-ready');
      //this.webview.openDevTools();
    });
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
