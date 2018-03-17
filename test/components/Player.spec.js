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
    webview: component.find('[data-tid="webview"]')
  };
}

describe('Player component', () => {
  it('should display webview with src', () => {
    const { webview } = setup();
    expect(webview.prop('src')).toEqual('http://www.bbc.co.uk/programmes/b09s37vt');
  });

  it('should handle play pause action', () => {
    const { actions, component } = setup();
    component.setProps({ playPauseKeyActive: true });
    expect(actions.deactivate.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { component } = setup();

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
