function stack_init() {
  var stack = {
      MaxIndex: -1,
      storage: []
    };
  return stack;
}

function stack_is_empty(stack) {
  if (stack.MaxIndex === -1) {
    return true;
  }
  return false;
}

function stack_push(stack, item) {
  var i = stack.MaxIndex;
  i++;
  stack.MaxIndex = i;
  stack.storage[stack.MaxIndex] = item;
  return stack;
}

function stack_pop(stack) {
  if (stack.MaxIndex === -1) {
    return "error";
  }
  var i = stack.MaxIndex;
  var pop = stack.storage[stack.MaxIndex];
  --i;
  stack.MaxIndex = i;
  return pop;
}