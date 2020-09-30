import { MainB } from "../03/b/main";

test("it should be symbol is not compatible with the language", () => {
  const a = new MainB("okokko");

  let res = a.belongsToLanguage();

  expect(res).toEqual(false);
});

test("it should be belongs to lenguage", () => {
  const a = new MainB("10101010");

  let res = a.belongsToLanguage();

  expect(res).toEqual(true);
});

test("it should not belongs to lenguage", () => {
  const a = new MainB("110");

  let res = a.belongsToLanguage();

  expect(res).toEqual(false);
});
