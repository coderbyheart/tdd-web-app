import { helloWorld } from "./helloWorld.js";

describe("helloWorld()", () => {
  it("should return Hello World!", () =>
    expect(helloWorld()).toEqual("Hello World!"));
});
