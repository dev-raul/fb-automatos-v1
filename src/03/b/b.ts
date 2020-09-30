import { Q0 } from "./q0";
export interface State {
  handleState(x: string, fim: boolean): boolean;
}

export class B {
  private state: State = new Q0(this);
  private count0: number = 0;
  private count1: number = 0;

  getState(): State {
    return this.state;
  }
  setState(state: State): void {
    this.state = state;
  }

  getCount0(): number {
    return this.count0;
  }
  setCount0(count: number): void {
    this.count0 = count;
  }

  getCount1(): number {
    return this.count1;
  }
  setCount1(count: number): void {
    this.count1 = count;
  }

  handleState(x: string, fim: boolean): boolean {
    return this.state.handleState(x, fim);
  }
}
