import * as actions from '../../app/actions/mediaKeys';

describe('actions', () => {
  it('should activate should create activate action', () => {
    expect(actions.activate()).toMatchSnapshot();
  });

  it('should deactivate should create deactivate action', () => {
    expect(actions.deactivate()).toMatchSnapshot();
  });
});
