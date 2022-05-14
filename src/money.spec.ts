import { expect, test } from 'vitest';
import { Dollar } from './dollar';

test('Test Multiplication', () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
