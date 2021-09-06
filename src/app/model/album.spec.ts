import { Album } from './album';

describe('Album', () => {
  it('should create an instance', () => {
    expect(new Album(1, 'title1', '1/2/2020', '', '', '', '')).toBeTruthy();
  });
});
