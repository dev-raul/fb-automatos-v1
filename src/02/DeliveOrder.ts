import { OrderState, Order } from "./order";
import { FinishOrder } from "./FinishOrder";

export class DeliveOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): string {
    return "O pedido já foi criado!";
  }
  approvedOrder(): string {
    return "O pedido já está aprovado e está a caminho!";
  }
  cancelOrder(): string {
    return "O pedido não pode ser cancelado quando está a caminho!";
  }
  carryOrder(): string {
    return "O pedido não pode ser entregue!";
  }
  deliveOrder(): string {
    return "O pedido já foi entregue!";
  }
  finishOrder(): string {
    this.order.setState(new FinishOrder(this.order));
    return "O pedido foi finalizado!";
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
