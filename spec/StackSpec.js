/*global describe, it, expect, stack_init, stack_pop, stack_is_empty, stack_push, renum, restack */
describe("stack", function () {
  var a = new stack_init();
  var s = new stack_init();
  var p = 9;
  var i;


  it("should be empty after init", function () {
    expect(stack_init()).toBeDefined;
  });

  it("Is stack empty", function () {
    expect(stack_is_empty(a)).toBe(true);
  });

  it("Pop an empty stack", function () {
    expect(stack_pop(a)).toEqual("error");
  });

  it("Not empty after push", function () {
    expect(stack_is_empty(stack_push(a, p))).toBe(false);
  });

  it("Push value is the same as pop value", function () {
    expect(stack_pop(stack_push(a, 9))).toEqual(p);
  });

  it("Should be empty after push and pop", function () {
    stack_push(s, 9);
    stack_pop(s);
    expect(stack_is_empty(s)).toBe(true);
  });

  it("Multipush should get back the same values in the revers order", function () {

    var num = [1, 2, 3, 4];

    var renum = [4, 3, 2, 1];

    var restack = [];

    for (i = 0; i < 4; i++) {
      stack_push(a, num[i]);
    }

    for (i = 0; i < 4; i++) {
      restack[i] = stack_pop(a);
    }

    expect(restack).toEqual(renum);
  });
});