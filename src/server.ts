console.log("----TRABALHO DE AUTOMATOS----");

import question01 from "./01";
import { Order } from "./02/order";
import { Main } from "./03/a/main";
import { MainB } from "./03/b/main";

question01.a("ababbaba");
question01.b(2);
console.log("------------------------------");

const order = new Order();

console.log(order.handleNewOrder());
console.log(order.handleApprovedOrder());
console.log(order.handleCarryOrder());
console.log(order.handleDeliveOrder());
console.log(order.handleFinishOrder());
console.log("------------------------------");

const main = new Main("ok");
main.belongsToLanguage();
console.log("------------------------------");

const mainb = new MainB("10011100");
mainb.belongsToLanguage();
