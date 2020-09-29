import { Order } from "../02/order";

test("it should be new order", () => {
  const order = new Order();

  let res = order.handleNewOrder();
  console.log(res);

  expect(res).toEqual("Criando um novo pedido!");
});

test("it should be approved order", () => {
  const order = new Order();

  console.log(order.handleNewOrder());
  let res = order.handleApprovedOrder();
  console.log(res);

  expect(res).toEqual("O pedido foi aprovado!");
});

test("it should be cancel order in approved order", () => {
  const order = new Order();

  console.log(order.handleNewOrder());
  console.log(order.handleApprovedOrder());
  let res = order.handleCancelOrder();
  order.handleFinishOrder();
  console.log(res);

  expect(res).toEqual("O pedido foi cancelado!");
});

test("it should be carry order", () => {
  const order = new Order();

  console.log(order.handleNewOrder());
  console.log(order.handleApprovedOrder());
  let res = order.handleCarryOrder();

  console.log(res);

  expect(res).toEqual("O pedido foi enviado!");
});

test("it should be delive order", () => {
  const order = new Order();

  console.log(order.handleNewOrder());
  console.log(order.handleApprovedOrder());
  console.log(order.handleCarryOrder());
  let res = order.handleDeliveOrder();
  order.handleFinishOrder();
  console.log(res);

  expect(res).toEqual("O pedido foi entregue!");
});

test("it should be finish order", () => {
  const order = new Order();

  console.log(order.handleNewOrder());
  console.log(order.handleApprovedOrder());
  console.log(order.handleCarryOrder());
  console.log(order.handleDeliveOrder());
  let res = order.handleFinishOrder();
  console.log(res);

  expect(res).toEqual("O pedido foi finalizado!");
});
