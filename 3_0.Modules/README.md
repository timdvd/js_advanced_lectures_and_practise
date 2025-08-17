# What are Modules?

## A module is just a separate JavaScript file that can export code (variables, functions, classes) and import it into other files.

## Modules help you:

### - Organize code into smaller, reusable parts

### - Avoid polluting the global scope

### - Make large projects easier to manage

## Types of Modules
### 1) ES6 Modules (import/export)

 - Introduced in ES6 (2015). Standard way in modern JS.

math.js
```
// Named export
export function add(a, b) {
  return a + b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}
```

main.js
```
import multiply, { add } from './math.js';

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
```

### ✅ Works in browsers (<script type="module">) and Node.js ("type": "module" in package.json).

### 2) CommonJS (require/module.exports)

 - Older system, mainly used in Node.js before ES6 modules.

math.js
```
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

main.js
```
const math = require('./math.js');
console.log(math.add(2, 3)); // 5
```
