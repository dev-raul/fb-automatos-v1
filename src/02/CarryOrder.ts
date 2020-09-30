import { OrderState, Order } from "./order";
import { DeliveOrder } from "./DeliveOrder";

export class CarryOrder implements OrderState {
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
    return "O pedido já está a caminho!";
  }
  deliveOrder(): string {
    this.order.setState(new DeliveOrder(this.order));
    return "O pedido foi entregue!";
  }
  finishOrder(): string {
    return "Você não pode finalizar o pedido antes de ser entregue!";
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
