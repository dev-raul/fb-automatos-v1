import { NewOrder } from "./NewOrder";

export interface OrderState {
  newOrder(): void;
  approvedOrder(): void;
  cancelOrder(): void;
  carryOrder(): void;
  carryOrder(): void;
  deliveOrder(): void;
  finishOrder(): void;
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

  handleNewOrder(): void {
    if (this.name === "Pedido") {
      console.log("Criando um novo pedido!  ");
      this.state = new NewOrder(this);
    } else {
      this.state.newOrder();
    }
  }
  handleApprovedOrder(): void {
    this.state.approvedOrder();
  }
  handleCancelOrder(): void {
    this.state.cancelOrder();
  }
  handleCarryOrder(): void {
    this.state.carryOrder();
  }
  handleDeliveOrder(): void {
    this.state.deliveOrder();
  }
  handleFinishOrder(): void {
    this.state.finishOrder();
  }
}
