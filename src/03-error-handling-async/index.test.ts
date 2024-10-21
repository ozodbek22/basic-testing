import { rejectCustomError, resolveValue, throwCustomError, throwError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue('test');
    expect(result).toBe('test');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('test')).toThrowError('test');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError('Something went wrong!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError('test')).toThrowError('test');
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    try {
      await rejectCustomError('test');
    } catch (error) {
      expect(error).toBe('test');
    }
  });
});
