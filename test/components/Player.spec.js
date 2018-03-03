import { spy } from 'sinon';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Player from '../../app/components/Player';
import { initialState as stations } from '../../app/reducers/stations';

Enzyme.configure({ adapter: new Adapter() });


function setup() {
  const actions = {
    deactivate: spy(),
    activate: spy()
  };

  const component = mount(<Player playPauseKeyActive={false} station={stations[0]} {...actions} />);

  return {
    component,
    actions,
    webview: component.find('[data-tid="player"]')
  };
}

describe('Player component', () => {
  it('should display webview with src', () => {
    const { webview } = setup();
    expect(webview.prop('src')).toEqual('http://www.bbc.co.uk/programmes/b09s37vt');
  });

  it('should first button should call increment', () => {
    const { actions, component } = setup();
    component.setProps({ playPauseKeyActive: true });
    expect(actions.deactivate.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { actions } = setup();
    const counter = (
      <div>
        <Router>
          <Player playPauseKeyActive={false} station={stations[0]} {...actions} />
        </Router>
      </div>
    );
    const tree = renderer
      .create(counter)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
