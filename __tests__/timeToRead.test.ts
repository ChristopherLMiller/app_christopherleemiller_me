import { timeToRead } from "utils/functions";

describe("timeToRead test", () => {
  it("Returns correctly formatted string based on 200 word input", () => {
    expect(timeToRead(200)).toEqual("1min");
  });
  it("Returns correct time string ased on a 500 word input", () => {
    expect(timeToRead(500)).toEqual("3min");
  });
});
