import { State, B } from "./b";

export class Q2 implements State {
  constructor(private b: B) {}

  handleState(x: string, fim: boolean): boolean {
    if (x === "1") {
      this.b.setCount1(this.b.getCount1() + 1);
    } else {
      this.b.setCount0(this.b.getCount0() + 1);
    }

    if (this.b.getCount0() === this.b.getCount1()) {
      return true;
    }
    return false;
  }
}
