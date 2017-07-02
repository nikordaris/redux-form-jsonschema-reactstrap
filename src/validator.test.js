import validator from './validator';

describe('Call Validator', () => {
  it('should validate schema', () => {
    const schema = {
      type: 'string'
    };

    const result = validator(schema, false)('test', {}, {});
    expect(result).toBeUndefined();
  });

  it('should have missing required field', () => {
    const schema = {
      type: 'string'
    };

    const result = validator(schema, true)('', {}, {});
    expect(result).toEqual('missing required field');
  });
});
