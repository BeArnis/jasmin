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