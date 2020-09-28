import question01 from "../01/index";

test("it should be fail the item b question for number is not N", () => {
  let res = question01.b(1.1);

  expect(res).toEqual(false);
});
test("it should be ok the item b question", () => {
  let res = question01.b(1);

  expect(res).toEqual(true);
});
