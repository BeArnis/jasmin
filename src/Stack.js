function Stack_init() {
  var stack = new Array();
  return stack;
}

function Stack_is_empty(Stack) {
  if (Stack.length === 0) {
    return true;
  }
  return false;
}

function Stack_push(Stack, item) {
  Stack.push(item);
  return Stack;
}

function Stack_pop(Stack) {
  if (Stack.length === 0) {
    return "error";
  }
  return Stack.pop();
}