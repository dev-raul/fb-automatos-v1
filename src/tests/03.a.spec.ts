import { Main } from "../03/a/main";

test("it should be symbol is not compatible with the language", () => {
  const a = new Main("01010");

  let res = a.belongsToLanguage();

  expect(res).toEqual(false);
});

test("it should be belongs to lenguage", () => {
  const a = new Main("kkkkokk");

  let res = a.belongsToLanguage();

  expect(res).toEqual(true);
});

test("it should not belongs to lenguage", () => {
  const a = new Main("kkkk");

  let res = a.belongsToLanguage();

  expect(res).toEqual(false);
});
