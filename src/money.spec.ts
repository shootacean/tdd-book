import { expect, test } from 'vitest';
import { Money, Expression, Bank, Sum } from './money';

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

test('Test Simple Addition', () => {
  // const sum: Money = Money.dollar(5).plus(Money.dollar(5));
  const five = Money.dollar(5);
  const sum: Expression = five.plus(five);
  const bank = new Bank();
  const reduced: Money = bank.reduce(sum, 'USD');
  expect(reduced).toEqual(Money.dollar(10));
});

test('Test Plus Return Sum', () => {
  const five: Money = Money.dollar(5);
  const result: Expression = five.plus(five);
  const sum: Sum = result as Sum;
  expect(five).toBe(sum.augend);
  expect(five).toBe(sum.addend);
});
