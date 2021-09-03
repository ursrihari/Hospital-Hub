import { CustomArrayPipe } from './custom-array.pipe';

describe('CustomArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
