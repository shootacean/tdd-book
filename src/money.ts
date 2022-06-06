export interface Expression {
  reduce(bank: Bank, to: string): Money;
}
export class Money implements Expression {
  // NOTE: Parameter propertiesでのプロパティ定義
  constructor(protected _amount: number, protected _currency: string) {
    this._amount = _amount;
    this._currency = _currency;
  }
  get amount(): number {
    return this._amount;
  }
  get currency(): string {
    return this._currency;
  }
  // NOTE Factory Method Pattern
  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }
  // NOTE Factory Method Pattern
  static flanc(amount: number): Money {
    return new Money(amount, 'CHF');
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
  reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}
export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
  addRate(from: string, to: string, rate: int): void {}
  rate(from: string, to: string): number {
    return from === 'CHF' && to === 'USD' ? 2 : 1;
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
  reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
