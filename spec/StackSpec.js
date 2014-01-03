/*global describe, it, expect, stack_init, stack_pop, stack_is_empty, stack_push, renum, restack */
describe("stack", function () {
  var a = new Stack_init();
  var s = new Stack_init();
  var p = 9;
  var i;


  it("should be empty after init", function () {
    expect(stack_init()).toBeDefined;
  });

  it("should be empty if nothing has been done to it", function () {
    expect(stack_is_empty(a)).toBe(true);
  });

  it("should return an error if we try to take something out of it if it is empty", function () {
    expect(stack_pop(a)).toEqual("error");
  });

  it("should not be empty if we have put something in it", function () {
    expect(stack_is_empty(stack_push(a, p))).toBe(false);
  });

  it("should return the same value we have put inside it", function () {
    expect(stack_pop(stack_push(a, 9))).toEqual(p);
  });

  it("should be empty after we tied to put one element in and take one element out", function () {
    stack_push(s, 9);
    stack_pop(s);
    expect(stack_is_empty(s)).toBe(true);
  });

  it("should take some elements and return them in the reverse order", function () {

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