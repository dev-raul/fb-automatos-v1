import { OrderState, Order } from "./order";
import { ApprovedOrder } from "./ApprovedOrder";
import { FinishOrder } from "./FinishOrder";

export class CancelOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): void {
    console.error("O pedido precisa ser finalizado!");
  }
  approvedOrder(): void {
    console.error("O pedido precisa ser finalizado!");
  }
  cancelOrder(): void {
    console.error("O pedido precisa ser finalizado!");
  }
  carryOrder(): void {
    console.error("O pedido precisa ser finalizado!");
  }
  deliveOrder(): void {
    console.error("O pedido precisa ser finalizado!");
  }
  finishOrder(): void {
    this.order.setState(new FinishOrder(this.order));
    console.error("Pedido finalizado!");
  }
}
