import { OrderState, Order } from "./order";
import { ApprovedOrder } from "./ApprovedOrder";
import { CancelOrder } from "./CancelOrder";

export class NewOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): void {
    console.error("O pedido já foi criado!");
  }
  approvedOrder(): void {
    this.order.setState(new ApprovedOrder(this.order));
    console.log("O pedido foi aprovado!");
  }
  cancelOrder(): void {
    this.order.setState(new CancelOrder(this.order));
    console.log("O pedido foi cancelado!");
  }
  carryOrder(): void {
    console.error("O pedido não pode ser enviado antes de ser aprovado!");
  }
  deliveOrder(): void {
    console.error("O pedido não pode ser entregue antes de ser enviado!");
  }
  finishOrder(): void {
    console.error("Você não pode finalizar o pedido!");
  }
}
