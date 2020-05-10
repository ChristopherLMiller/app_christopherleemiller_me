import { countWords } from "utils/functions";

describe("wordCount test", () => {
  it("Returns correct count of words in simple sentence", () => {
    const testString = "The quick brown fox jumps over the lazy dog.";
    expect(countWords(testString)).toEqual(9);
  });
});
