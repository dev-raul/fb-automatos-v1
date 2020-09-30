import { A } from "./a";
export class Main {
  private a = new A();
  private symbol: string[] = ["o", "k"];
  constructor(private x: string) {}

  public belongsToLanguage(): boolean {
    for (var i = 0; i < this.x.length; i++) {
      let item: string = this.x.charAt(i);
      if (this.symbol.indexOf(item) < 0) {
        console.log(
          ` -> A string ${this.x} não é compativel com a simbologia da linguaguem!`
        );
        return false;
      } else {
        if (this.a.handleState(item)) {
          console.log(` -> A string ${this.x} pertence a linguaguem!`);
          return true;
        }
      }
    }
    if (this.a.handleState(this.x.charAt(this.x.length - 1))) {
      console.log(` -> A string ${this.x} pertence a linguaguem!`);
      return true;
    } else {
      console.log(` -> A string ${this.x} não pertence a linguaguem!`);
      return false;
    }
  }
}
