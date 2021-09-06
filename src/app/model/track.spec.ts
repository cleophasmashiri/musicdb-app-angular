import { Track } from './track';

describe('Track', () => {
  it('should create an instance', () => {
    expect(new Track(1, 'title1', '20')).toBeTruthy();
  });
});
