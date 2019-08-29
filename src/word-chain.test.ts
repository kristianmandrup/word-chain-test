// wordChain.js

import { TextTree } from "./TextTree";
import { wordChain } from "./word-chain";
import { exist, notExist, isNumber, createChecker } from "./helpers";

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

  it("create a word chain", () => {
    createAndCheck("lead", "gold");
  });

  it("create a word chain", () => {
    createAndCheck("market", "barter");
  });

  it("create a word chain", () => {
    createAndCheck("carry", "sough");
  });

  it("create a word chain", () => {
    createAndCheck("bread", "table");
  });

  it("create a word chain", () => {
    createAndCheck("travel", "market");
  });
});
