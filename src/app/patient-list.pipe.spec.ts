import { PatientListPipe } from './patient-list.pipe';

describe('PatientListPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientListPipe();
    expect(pipe).toBeTruthy();
  });
});
