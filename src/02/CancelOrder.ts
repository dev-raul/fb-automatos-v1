import { OrderState, Order } from "./order";
import { ApprovedOrder } from "./ApprovedOrder";
import { FinishOrder } from "./FinishOrder";

export class CancelOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): string {
    return "O pedido precisa ser finalizado!";
  }
  approvedOrder(): string {
    return "O pedido precisa ser finalizado!";
  }
  cancelOrder(): string {
    return "O pedido precisa ser finalizado!";
  }
  carryOrder(): string {
    return "O pedido precisa ser finalizado!";
  }
  deliveOrder(): string {
    return "O pedido precisa ser finalizado!";
  }
  finishOrder(): string {
    this.order.setState(new FinishOrder(this.order));
    return "Pedido finalizado!";
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
