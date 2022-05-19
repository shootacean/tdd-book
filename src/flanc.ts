import { Money } from './money';
export class Flanc extends Money {
  times(multiplier: number): Flanc {
    return new Flanc(this.amount * multiplier);
  }
}
