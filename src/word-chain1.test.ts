// wordChain.js

import { TextTree } from "./TextTree";
import { wordChain } from "./word-chain";
import {
  exist,
  notExist,
  isNumber,
  isArray,
  isEqual,
  createChecker
} from "./helpers";

let textTree: any = null;

describe("Text tree", () => {
  it("initialise from dictionary", done => {
    textTree = new TextTree();
    exist(textTree);
    textTree.initialise("../data/50kwords.txt", (err: any, lineCount: any) => {
      notExist(err);
      exist(lineCount);
      isNumber(lineCount);
      done();
    });
  });
});

const createAndCheck = createChecker(test);

describe("Word chain solver", () => {
  // Some word chains may take a long time to solve

  it("not create chain for invalid words", () => {
    const chain = wordChain(textTree, "xxxxx", "zzzzz");
    exist(chain);
  });

  type StrMap = {
    [key: string]: string;
  };

  const chainMap: StrMap = {
    lead: "gold",
    market: "barter",
    carry: "sough",
    bread: "table",
    travel: "market"
  };
  const keys = Object.keys(chainMap);

  keys.map(key => {
    const first = key;
    const last = chainMap[key];

    it(`create a word chain for ${first} to ${last}`, () => {
      createAndCheck(first, last);
    });
  });
});
