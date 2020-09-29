import { OrderState, Order } from "./order";
import { CancelOrder } from "./CancelOrder";
import { CarryOrder } from "./CarryOrder";

export class ApprovedOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): string {
    return "O pedido já foi criado!";
  }
  approvedOrder(): string {
    return "O pedido já está aprovado!";
  }
  cancelOrder(): string {
    this.order.setState(new CancelOrder(this.order));
    return "O pedido foi cancelado!";
  }
  carryOrder(): string {
    this.order.setState(new CarryOrder(this.order));
    return "O pedido foi enviado!";
  }
  deliveOrder(): string {
    return "O pedido não pode se entrgue antes de ser enviado!";
  }
  finishOrder(): string {
    return "Você não pode finalizar o pedido antes de cancelar!";
  }
}
