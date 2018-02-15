// @flow
import * as React from 'react';
import MediaActions from '../components/MediaActions';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <MediaActions />
        {this.props.children}
      </div>
    );
  }
}
