export interface Expression {}
export class Money implements Expression {
  // NOTE: Parameter propertiesでのプロパティ定義
  constructor(protected _amount: number, protected currency: string) {
    this._amount = _amount;
    this.currency = currency;
  }
  get amount(): number {
    return this._amount;
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
  plus(addend: Money): Expression {
    return new Sum(this, addend);
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
export class Bank {
  reduce(source: Expression, to: string): Money {
    if (source instanceof Money) {
      return source as Money;
    }
    const sum: Sum = source as Sum;
    return sum.reduce(to);
  }
}

export class Sum implements Expression {
  constructor(private _augend: Money, private _addend: Money) {
    this._augend = _augend;
    this._addend = _addend;
  }
  get augend(): Money {
    return this._augend;
  }
  get addend(): Money {
    return this._addend;
  }
  reduce(to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
