import { expect, test } from 'vitest';
import { Dollar } from './dollar';
import { Flanc } from './flanc';

test('Test Multiplication', () => {
  const five = new Dollar(5);
  expect(five.times(2)).toEqual(new Dollar(10));
  expect(five.times(3)).toEqual(new Dollar(15));
});

test('Test Equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  expect(new Flanc(5).equals(new Flanc(5))).toBeTruthy();
  expect(new Flanc(5).equals(new Flanc(6))).toBeFalsy();
});

test('Test Franc Multiplication', () => {
  const five = new Flanc(5);
  expect(five.times(2)).toEqual(new Flanc(10));
  expect(five.times(3)).toEqual(new Flanc(15));
});
