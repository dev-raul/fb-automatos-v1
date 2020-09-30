import { Q0 } from "./q0";
export interface State {
  handleState(x: string): boolean;
}

export class A {
  private state: State = new Q0(this);

  public setState(state: State): void {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  public handleState(x: string): boolean {
    return this.state.handleState(x);
  }
}
