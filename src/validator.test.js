import validate from './validator';

describe('Call Validator', () => {
  it('should validate schema', () => {
    const schema = {
      type: 'string'
    };

    const result = validate(schema, false)('test', {}, {});
    expect(result).toBeUndefined();
  });

  it('should have missing required field', () => {
    const schema = {
      type: 'string'
    };

    const result = validate(schema, true)('', {}, {});
    expect(result).toEqual('missing required field');
  });
});
