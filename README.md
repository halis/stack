# stack
A no dependency implementation of a stack in JavaScript.

```javascript
var stack = new Stack([1,2,3]);
stack.print(); // Bottom - 1, 2, 3 - Top

console.log('Push: ', stack.push(4)); // Push:  4
stack.print(); // Bottom - 1, 2, 3, 4 - Top

console.log('Top: ', stack.top()); // Top:  4
console.log('Pop: ', stack.pop()); // Pop:  4
stack.print(); // Bottom - 1, 2, 3 - Top

console.log('Top: ', stack.top()); // Top:  3
console.log('Size: ', stack.size); // Size:  3
```
