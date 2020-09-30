import { OrderState, Order } from "./order";
import { ApprovedOrder } from "./ApprovedOrder";
import { NewOrder } from "./NewOrder";

export class FinishOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): string {
    this.order.setState(new NewOrder(this.order));
    return "Criando um novo pedido!";
  }
  approvedOrder(): string {
    return "O pedido precisa ser criado!";
  }
  cancelOrder(): string {
    return "O pedido precisa ser criado!";
  }
  carryOrder(): string {
    return "O pedido precisa ser criado!";
  }
  deliveOrder(): string {
    return "O pedido precisa ser criado!";
  }
  finishOrder(): string {
    return "O pedido já está finalizado!";
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
