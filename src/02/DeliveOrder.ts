import { OrderState, Order } from "./order";
import { FinishOrder } from "./FinishOrder";

export class DeliveOrder implements OrderState {
  constructor(private order: Order) {}

  newOrder(): void {
    console.error("O pedido já foi criado!");
  }
  approvedOrder(): void {
    console.error("O pedido já está aprovado e está a caminho!");
  }
  cancelOrder(): void {
    console.error("O pedido não pode ser cancelado quando está a caminho!");
  }
  carryOrder(): void {
    console.error("O pedido não pode ser entregue!");
  }
  deliveOrder(): void {
    console.error("O pedido já foi entregue!");
  }
  finishOrder(): void {
    this.order.setState(new FinishOrder(this.order));
    console.error("O pedido foi finalizado!");
  }
}
