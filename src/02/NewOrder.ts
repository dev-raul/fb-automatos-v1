import { OrderState, Order } from "./order";
import { ApprovedOrder } from "./ApprovedOrder";
import { CancelOrder } from "./CancelOrder";

export class NewOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): string {
    return "O pedido já foi criado!";
  }
  approvedOrder(): string {
    this.order.setState(new ApprovedOrder(this.order));
    return "O pedido foi aprovado!";
  }
  cancelOrder(): string {
    this.order.setState(new CancelOrder(this.order));
    return "O pedido foi cancelado!";
  }
  carryOrder(): string {
    return "O pedido não pode ser enviado antes de ser aprovado!";
  }
  deliveOrder(): string {
    return "O pedido não pode ser entregue antes de ser enviado!";
  }
  finishOrder(): string {
    return "Você não pode finalizar o pedido!";
  }
  //Métodos extras
  backOrder(): string {
    return "";
  }
  scheduleOrder(): string {
    return "";
  }
  editOrder(): string {
    return "";
  }
}
