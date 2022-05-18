export class Flanc {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number): Flanc {
    return new Flanc(this.amount * multiplier);
  }
  equals(dollor: Flanc): boolean {
    return this.amount === dollor.amount;
  }
}
