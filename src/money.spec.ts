import { expect, test } from 'vitest';
import { Money } from './money';

test('Test Multiplication', () => {
  const five: Money = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test('Test Equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.flanc(5).equals(Money.dollar(5))).toBeFalsy();
});

test('Test Currency', () => {
  expect(Money.dollar(1).getCurrency()).toEqual('USD');
  expect(Money.flanc(1).getCurrency()).toEqual('CHF');
});
