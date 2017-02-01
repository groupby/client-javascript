import { expect } from 'chai';
import api from '../src/api';

describe('GroupBy api', () => {
  it('should have a root api', () => {
    expect(api).to.be.ok;
  });

  it('should have a searchandiser child api', () => {
    expect(api.searchandiser).to.be.ok;
  });

  it('should have a sayt child api', () => {
    expect(api.sayt).to.be.ok;
  });

  it('should have a recommedations child api');

  it('should have a commandCenter child api');
});
