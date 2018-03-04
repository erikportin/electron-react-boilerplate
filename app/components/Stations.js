// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Stations.css';
import type { stationStateType } from '../reducers/stations';

type Props = {
  add: () => void,
  remove: () => void,
  stations: Array<stationStateType>
};

export default class Player extends Component<Props> {
  props: Props;

  render() {
    const { stations } = this.props;
    return (
      <ul>
        {stations.map((station, i) => {
          return (
            <li key={station.url}>
              <Link to={`/station/${i}`}>{station.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
