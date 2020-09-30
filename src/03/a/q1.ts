import { State, A } from "./a";
import { Q2 } from "./q2";

export class Q1 implements State {
  constructor(private a: A) {}

  handleState(x: string): boolean {
    if (x === "k") {
      this.a.setState(new Q2(this.a));
    }
    return false;
  }
}
