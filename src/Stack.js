function stack_init() {
  var stack = new array();
  return stack;
}

function stack_is_empty(stack) {
  if (stack.length === 0) {
    return true;
  }
  return false;
}

function stack_push(stack, item) {
  stack.push(item);
  return stack;
}

function stack_pop(stack) {
  if (stack.length === 0) {
    return "error";
  }
  return stack.pop();
}