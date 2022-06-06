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
  expect(Money.dollar(1).currency).toEqual('USD');
  expect(Money.flanc(1).currency).toEqual('CHF');
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
  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
});

test('Test Reduce Sum', () => {
  const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
  const bank: Bank = new Bank();
  const result = bank.reduce(sum, 'USD');
  expect(result).toEqual(Money.dollar(7));
});

test('Test Reduce Money', () => {
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(Money.dollar(1), 'USD');
  expect(result).toEqual(Money.dollar(1));
});

test('Test Reduce Money Different Currency', () => {
  const bank: Bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result: Money = bank.reduce(Money.flanc(2), 'USD');
  expect(result).toEqual(Money.dollar(1));
});
