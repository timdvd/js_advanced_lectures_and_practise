# What are ES6+ Modules?

## In ES6 (ECMAScript 2015), JavaScript introduced a built-in module system.
## Modules let you split your code into separate files and reuse them easily.

- Each file is a module.

- You can export variables, functions, classes from one module.

- You can import them into another module.

### This makes code cleaner, reusable, and easier to maintain.

## Exporting
### 1) Named Exports

You can export multiple things:
```
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

### 2) Default Export

Each module can have one default export:
```
// greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

## Importing
### 1) Import Named Exports
```
import { add, multiply } from './math.js';

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
```

### 2) Import Default Export
```
import greet from './greet.js';

console.log(greet("Alice")); // Hello, Alice!
```
### 3) Import Everything
```
import * as math from './math.js';

console.log(math.add(10, 5));      // 15
console.log(math.multiply(3, 7));  // 21
```

## Combining Default + Named
```
// user.js
export const role = "Admin";
export default function getUser() {
  return { name: "John", role };
}
```
```
// main.js
import getUser, { role } from './user.js';

console.log(getUser()); // { name: "John", role: "Admin" }
console.log(role);      // Admin
```

### Notes & Best Practices

 - In Node.js, ES6 modules use .mjs files or "type": "module" in package.json.

 - In browsers, use <script type="module" src="main.js"></script>.

 - Default exports are best for a single main function/class.

 - Named exports are best for utility functions/constants.

## ✅ In short:
### - export → share code
### - import → use shared code
### - Helps organize large projects, avoid global variables, and keep code modular.
