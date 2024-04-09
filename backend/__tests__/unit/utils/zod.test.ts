import {
  zodProperty,
  transform_removeUndefinedProps,
  refine_atLeastOneNonEmpty,
} from '@/utils/zod';

// Test suite for zod utility functions
describe('Zod schemas and utility functions', () => {
  // Test case for zodProperty.nonEmptyString
  it('should validate non-empty string', () => {
    const schema = zodProperty.nonEmptyString('testParam');
    expect(schema.safeParse('')).toMatchObject({ success: false });
    expect(schema.safeParse('non-empty')).toMatchObject({ success: true });
  });

  // Test case for zodProperty.numberQueryParam
  it('should validate number query parameter', () => {
    const schema = zodProperty.numberQueryParam('testParam');
    expect(schema.safeParse('')).toMatchObject({ success: false });
    expect(schema.safeParse('abc')).toMatchObject({ success: false });
    expect(schema.safeParse('123')).toMatchObject({ success: true });
  });

  // Test case for zodProperty.optionalNumberQueryParam
  it('should validate optional number query parameter', () => {
    const schema = zodProperty.optionalNumberQueryParam('testParam');
    expect(schema.safeParse('')).toMatchObject({ success: false });
    expect(schema.safeParse('abc')).toMatchObject({ success: false });
    expect(schema.safeParse('123')).toMatchObject({ success: true });
    expect(schema.safeParse(undefined)).toMatchObject({ success: true });
  });

  // Test case for transform_removeUndefinedProps
  it('should remove undefined or empty string properties', () => {
    const input = { a: 1, b: undefined, c: '', d: 'value' };
    const output = transform_removeUndefinedProps(input);
    expect(output).toEqual({ a: 1, d: 'value' });
  });

  // Test case for refine_atLeastOneNonEmpty
  it('should check if at least one property is non-empty', () => {
    const validator = refine_atLeastOneNonEmpty(['a', 'b', 'c']);
    expect(validator({ a: '', b: 'value', c: '' })).toBe(true);
    expect(validator({ a: '', b: '', c: '' })).toBe(false);
  });
});
