import { State, A } from "./a";

export class Q2 implements State {
  constructor(private a: A) {}

  handleState(x: string): boolean {
    return true;
  }
}
