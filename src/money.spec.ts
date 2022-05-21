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
  expect(Money.flanc(5).equals(Money.flanc(5))).toBeTruthy();
  expect(Money.flanc(5).equals(Money.flanc(6))).toBeFalsy();
  expect(Money.flanc(5).equals(Money.dollar(5))).toBeFalsy();
});

test('Test Franc Multiplication', () => {
  const five: Money = Money.flanc(5);
  expect(five.times(2)).toEqual(Money.flanc(10));
  expect(five.times(3)).toEqual(Money.flanc(15));
});
