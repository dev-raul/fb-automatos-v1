import { B } from "./b";
export class MainB {
  private b = new B();
  private symbol: string[] = ["0", "1"];
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
        if (i == this.x.length - 1) {
          this.b.handleState(item, true);
          let res = this.b.handleState(item, true);
          if (res) {
            console.log(` -> A string ${this.x} pertence a linguaguem!`);
            return true;
          }
        }
        this.b.handleState(item, false);
      }
    }

    console.log(` -> A string ${this.x} não pertence a linguaguem!`);
    return false;
  }
}
