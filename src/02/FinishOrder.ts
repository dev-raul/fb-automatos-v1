import { OrderState, Order } from "./order";
import { ApprovedOrder } from "./ApprovedOrder";
import { NewOrder } from "./NewOrder";

export class FinishOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): void {
    this.order.setState(new NewOrder(this.order));
    console.log("Criando um novo pedido!");
  }
  approvedOrder(): void {
    console.error("O pedido precisa ser criado!");
  }
  cancelOrder(): void {
    console.error("O pedido precisa ser criado!");
  }
  carryOrder(): void {
    console.error("O pedido precisa ser criado!");
  }
  deliveOrder(): void {
    console.error("O pedido precisa ser criado!");
  }
  finishOrder(): void {
    console.error("O pedido já está finalizado finalizado!");
  }
}
