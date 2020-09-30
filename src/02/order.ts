import { NewOrder } from "./NewOrder";

export interface OrderState {
  newOrder(): string;
  approvedOrder(): string;
  cancelOrder(): string;
  carryOrder(): string;
  carryOrder(): string;
  deliveOrder(): string;
  finishOrder(): string;

  //Estados extras
  backOrder(): string;
  scheduleOrder(): string;
  editOrder(): string;
}

export class Order {
  private state: OrderState;
  private name: string = "Pedido";

  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getState(): OrderState {
    return this.state;
  }
  setState(state: OrderState): void {
    this.state = state;
  }

  handleNewOrder(): string {
    if (this.name === "Pedido") {
      this.state = new NewOrder(this);
      return "Criando um novo pedido!";
    } else {
      return this.state.newOrder();
    }
  }
  handleApprovedOrder(): string {
    return this.state.approvedOrder();
  }
  handleCancelOrder(): string {
    return this.state.cancelOrder();
  }
  handleCarryOrder(): string {
    return this.state.carryOrder();
  }
  handleDeliveOrder(): string {
    return this.state.deliveOrder();
  }
  handleFinishOrder(): string {
    return this.state.finishOrder();
  }
}
