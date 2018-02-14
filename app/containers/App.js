// @flow
import * as React from 'react';
import { ipcRenderer } from 'electron';

ipcRenderer.on('mediaplaypause', () => {
    console.log('mediaplaypause pressed in app');
});


type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
