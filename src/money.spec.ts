import { expect, test } from 'vitest';
import { Dollar } from './dollar';

test('Test Multiplication', () => {
  const five = new Dollar(5);
  let product: Dollar;
  product = five.times(2);
  expect(product.amount).toBe(10);
  product = five.times(3);
  expect(product.amount).toBe(15);
});
