console.log("----TRABALHO DE AUTOMATOS----");

import question01 from "./01";
import { Order } from "./02/order";

question01.a("ababbaba");
question01.b(2);

const order = new Order();

order.handleNewOrder();
order.handleApprovedOrder();
order.handleCarryOrder();
order.handleDeliveOrder();
order.handleFinishOrder();
