const should = require("should");

const TextTree = require("../lib/textTree");
const wordChain = require("../lib/wordChain");

let testTree: any = null;

describe("Text tree", () => {
  it("initialise from dictionary", function(done) {
    testTree = new TextTree();
    should.exist(testTree);

    testTree.initialise(
      "../data/50kwords.txt",
      (err: any, lineCount: number) => {
        should.not.exist(err);
        should.exist(lineCount);
        done();
      }
    );
  });
});

describe("Word chain solver", () => {
  // Some word chains may take a long time to solve

  it("not create chain for invalid words", () => {
    const chain = wordChain(testTree, "xxxxx", "zzzzz");
    should.not.exist(chain);
  });

  it("create a word chain", () => {
    const chain = wordChain(testTree, "lead", "gold");
    should.exist(chain);
    chain.should.be.an.Array();
    chain.shift().should.equal("lead");
    chain.pop().should.equal("gold");
  });

  it("create a word chain", () => {
    const chain = wordChain(testTree, "market", "barter");
    should.exist(chain);
    chain.should.be.an.Array();
    chain.shift().should.equal("market");
    chain.pop().should.equal("barter");
  });

  it("create a word chain", () => {
    const chain = wordChain(testTree, "carry", "sough");
    should.exist(chain);
    chain.should.be.an.Array();
    chain.shift().should.equal("carry");
    chain.pop().should.equal("sough");
  });

  it("create a word chain", () => {
    const chain = wordChain(testTree, "bread", "table");
    should.exist(chain);
    chain.should.be.an.Array();
    chain.shift().should.equal("bread");
    chain.pop().should.equal("table");
  });

  it("create a word chain", () => {
    const chain = wordChain(testTree, "travel", "market");
    should.exist(chain);
    chain.should.be.an.Array();
    chain.shift().should.equal("travel");
    chain.pop().should.equal("market");
  });
});
