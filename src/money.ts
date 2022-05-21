export abstract class Money {
  // NOTE: Parameter propertiesでのプロパティ定義
  constructor(protected amount: number, protected currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  // TODO リファクタリング途中なので一時的にAbstractにしている
  abstract times(multiplier: number): Money;
  equals(money: Money): boolean {
    return (
      this.constructor.name === money.constructor.name &&
      this.amount === money.amount
    );
  }
  getCurrency(): string {
    return this.currency;
  }
  // NOTE Factory Method Pattern
  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }
  // NOTE Factory Method Pattern
  static flanc(amount: number): Money {
    return new Flanc(amount, 'CHF');
  }
}

export class Dollar extends Money {
  // TODO Flancとの重複を排除したい
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}
export class Flanc extends Money {
  // TODO Dollarとの重複を排除したい
  times(multiplier: number): Money {
    return Money.flanc(this.amount * multiplier);
  }
}
