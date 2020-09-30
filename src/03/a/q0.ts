import { State, A } from "./a";
import { Q1 } from "./q1";

export class Q0 implements State {
  constructor(private a: A) {}

  handleState(x: string): boolean {
    if (x === "o") {
      this.a.setState(new Q1(this.a));
    }
    return false;
  }
}
