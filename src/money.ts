export abstract class Money {
  constructor(protected amount: number) {
    this.amount = amount;
  }
  abstract times(multiplier: number): Money;
  equals(money: Money): boolean {
    return (
      this.constructor.name === money.constructor.name &&
      this.amount === money.amount
    );
  }
  static dollar(amount: number): Money {
    return new Dollar(amount);
  }
  static flanc(amount: number): Money {
    return new Flanc(amount);
  }
}

export class Dollar extends Money {
  // TODO Dollarとの重複を排除したい
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
export class Flanc extends Money {
  // TODO Flancとの重複を排除したい
  times(multiplier: number): Money {
    return new Flanc(this.amount * multiplier);
  }
}
