export const exist = (value: any) => expect(value).toBeDefined();
export const notExist = (value: any) => expect(value).not.toBeDefined();

export const isEqual = (value: any, checkValue: any) =>
  expect(value).toEqual(checkValue);

export const isNumber = (value: any) => expect(typeof value).toEqual("number");
export const isArray = (value: any) =>
  expect(Array.isArray(value)).toBeTruthy();

export const hasLength = (value: any, len: number) => {
  isArray(value);
  expect(value.length).toEqual(len);
};

export const isTrue = (value: any) => expect(value).toBeTruthy();
export const isFalse = (value: any) => expect(value).toBeFalsy();

export const checkersFor = (chain: any) => {
  const isChain = () => {
    exist(chain);
    isArray(chain);
  };

  const checkFirst = (word: string) => isEqual(chain.shift(), word);
  const checkLast = (word: string) => isEqual(chain.pop(), word);

  const checkTerminators = (first: string, last: string) => {
    isChain();
    checkFirst("lead");
    checkLast("gold");
  };

  return { isChain, checkFirst, checkLast, checkTerminators };
};

export const createChecker = (textTree: any) => (
  first: string,
  last: string
) => {
  const chain = wordChain(textTree, first, last);
  const { checkTerminators } = checkersFor(chain);
  checkTerminators(first, last);
};
