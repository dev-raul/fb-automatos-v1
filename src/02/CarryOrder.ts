import { OrderState, Order } from "./order";
import { DeliveOrder } from "./DeliveOrder";

export class CarryOrder implements OrderState {
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
    this.order.setState(new DeliveOrder(this.order));
    console.log("O pedido foi entregue!");
  }
  deliveOrder(): void {
    console.error("O pedido não pode ser entregue antes de ser enviado!");
  }
  finishOrder(): void {
    console.error("Você não pode finalizar o pedido antes de ser entregue!");
  }
}
