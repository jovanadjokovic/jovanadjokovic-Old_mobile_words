const comb = require('./combinations')

describe("Word combinations test", () => {
    test("Combination 7363 should return: 'rend','send','sene'", () => {
      expect(comb(7363)).toStrictEqual([ 'rend', 'send', 'sene' ]);
    });
    test("Empty combination should return: []", () => {
        expect(comb()).toStrictEqual([]);
      });
      test("Combination 55555 should return: []]", () => {
        expect(comb(55555)).toStrictEqual([]);
      });
   })