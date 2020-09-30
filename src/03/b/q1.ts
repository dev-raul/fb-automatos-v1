import { State, B } from "./b";
import { Q0 } from "./q0";
import { Q2 } from "./q2";

export class Q1 implements State {
  constructor(private b: B) {}

  handleState(x: string, fim: boolean): boolean {
    if (fim) {
      this.b.setState(new Q2(this.b));
      return false;
    }
    if (x === "0") {
      this.b.setCount0(this.b.getCount0() + 1);
      this.b.setState(new Q0(this.b));
    } else {
      this.b.setCount1(this.b.getCount1() + 1);
    }
    return false;
  }
}
