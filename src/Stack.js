function stack_init() {
  var i = -1;
  var stack = [];
  stack.storage = stack;
  stack.length1 = i;
  return stack.storage;
}

function stack_is_empty(stack) {
  if (stack.length1 === -1) {
    return true;
  }
  return false;
}

function stack_push(stack, item) {
  var i = stack.length1;
  i++;
  stack[i] = item;
  stack.storage = stack;
  stack.length1 = i;
  return stack;
}

function stack_pop(stack) {
  if (stack.length1 === -1) {
    return "error";
  }
  var i = stack.length1;
  var pop = stack[i];
  --i;
  stack.storage = stack;
  stack.length1 = i;
  return pop;
}