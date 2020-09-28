import { OrderState, Order } from "./order";
import { CancelOrder } from "./CancelOrder";
import { CarryOrder } from "./CarryOrder";

export class ApprovedOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): void {
    console.error("O pedido já foi criado!");
  }
  approvedOrder(): void {
    console.error("O pedido já está aprovado!");
  }
  cancelOrder(): void {
    this.order.setState(new CancelOrder(this.order));
    console.log("O pedido foi cancelado!");
  }
  carryOrder(): void {
    this.order.setState(new CarryOrder(this.order));
    console.log("O pedido foi enviado!");
  }
  deliveOrder(): void {
    console.error("O pedido não pode se entrgue antes de ser enviado!");
  }
  finishOrder(): void {
    console.error("Você não pode finalizar o pedido antes de cancelar!");
  }
}
