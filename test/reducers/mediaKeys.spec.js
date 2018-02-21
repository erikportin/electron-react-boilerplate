import playPauseKeyActive from '../../app/reducers/mediaKeys';
import { PLAY_PAUSE_ACTIVATED, PLAY_PAUSE_DEACTIVATED } from '../../app/actions/mediaKeys';

describe('reducers', () => {
  describe('playPauseKeyActive', () => {
    it('should handle initial state', () => {
      expect(playPauseKeyActive(undefined, {})).toMatchSnapshot();
    });

    it('should handle PLAY_PAUSE_ACTIVATED', () => {
      expect(playPauseKeyActive(false, { type: PLAY_PAUSE_ACTIVATED })).toMatchSnapshot();
    });

    it('should handle PLAY_PAUSE_DEACTIVATED', () => {
      expect(playPauseKeyActive(true, { type: PLAY_PAUSE_DEACTIVATED })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(playPauseKeyActive(true, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
