export class Money {
  // NOTE: Parameter propertiesでのプロパティ定義
  constructor(protected amount: number, protected currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
  equals(money: Money): boolean {
    return this.currency === money.currency && this.amount === money.amount;
  }
  getCurrency(): string {
    return this.currency;
  }
  // NOTE Factory Method Pattern
  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }
  // NOTE Factory Method Pattern
  static flanc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
