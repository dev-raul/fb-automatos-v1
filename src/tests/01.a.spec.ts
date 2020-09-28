import question01 from "../01/index";

test("it should be fail the item a question for invalid simbol", () => {
  let res = question01.a("ab1");

  expect(res).toEqual(false);
});
test("it should be fail the item a question for length invalid", () => {
  let res = question01.a("aaa");

  expect(res).toEqual(false);
});
test("it should be ok the item a question", () => {
  let res = question01.a("baab");

  expect(res).toEqual(true);
});
