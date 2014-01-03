/*global describe, it, expect, IS, Stack_init, a, p, s, Stack_pop, Stack_is_empty, Stack_push, renum, restack */
describe("Stack", function () {
  var a = new Stack_init();
  var s = new Stack_init();
  Stack_push(s, 9);
  var m = Stack_pop(s);

  var num = [1, 2, 3, 4];

  var renum = [4, 3, 2, 1];

  var restack = [];

  var p = 9;

  var i;
  for (i = 0; i < 4; i++) {
    Stack_push(a, num[i]);
  }

  for (i = 0; i < 4; i++) {
    restack[i] = Stack_pop(a);
  }


  it("should be empty after init", function () {
    expect(Stack_init()).toBeDefined;
  });

  it("Is stack empty", function () {
    expect(Stack_is_empty(a)).toBe(true);
  });

  it("Pop an empty stack", function () {
    expect(Stack_pop(a)).toEqual("error");
  });

  it("Not empty after push", function () {
    expect(Stack_is_empty(Stack_push(a, p))).toBe(false);
  });

  it("Push value is the same as pop value", function () {
    expect(Stack_pop(Stack_push(a, 9))).toEqual(p);
  });

  it("Should be empty after push and pop", function () {
    expect(Stack_is_empty(s)).toBe(true);
  });

  it("Multipush should get back the same values in the revers order", function () {
    expect(restack).toEqual(renum);
  });
});