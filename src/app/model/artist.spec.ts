import { Artist } from './artist';

describe('Artist', () => {
  it('should create an instance', () => {
    expect(new Artist('1', '', '', '', '', 1)).toBeTruthy();
  });
});
