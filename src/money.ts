export abstract class Money {
  constructor(protected amount: number) {
    this.amount = amount;
  }
  equals(money: Money): boolean {
    return (
      this.constructor.name === money.constructor.name &&
      this.amount === money.amount
    );
  }
}
