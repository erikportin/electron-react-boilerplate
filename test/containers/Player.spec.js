import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import Player from '../../app/containers/Player';
import { configureStore } from '../../app/store/configureStore';

import { initialState as stationsInitialState } from '../../app/reducers/stations';

Enzyme.configure({ adapter: new Adapter() });


function setup(initialState) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const routerProps = {
    match: {
      params: {
        id: 0
      }
    }
  };

  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Player {...routerProps} />
      </ConnectedRouter>
    </Provider>
  );
  const app = mount(provider);
  return {
    app,
    webview: app.find('[data-tid="player"]'),
  };
}

describe('Player', () => {
  it('should display webview with src', () => {
    const { webview } = setup({
      stations: stationsInitialState
    });
    expect(webview.prop('src')).toEqual('http://www.bbc.co.uk/programmes/b09s37vt');
  });
});

