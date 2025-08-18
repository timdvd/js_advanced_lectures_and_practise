# Generator Function

## A generator function in JavaScript is a special function that can pause and resume execution.
### -  Defined with function* syntax
### - Uses the yield keyword to pause execution and return a value
### - Resumed later using .next()

## 👉 Unlike normal functions (which run start → finish), generators can produce multiple values one at a time.

### Basic Example
```
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Looping Through a Generator
```
function* fruits() {
  yield "🍎";
  yield "🍌";
  yield "🍇";
}

for (let fruit of fruits()) {
  console.log(fruit);
}
```
// Output: 🍎 🍌 🍇

### Passing Values into a Generator
```
function* greeter() {
  const name = yield "What is your name?";
  yield `Hello, ${name}!`;
}

const g = greeter();

console.log(g.next().value);     // "What is your name?"
console.log(g.next("Alice").value); // "Hello, Alice!"
```

### Infinite Generators
```
function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
```

## Why Use Generators?
### - ✅ Handle lazy evaluation (produce values only when needed)
### - ✅ Useful for infinite sequences
### - ✅ Can simplify asynchronous code (before async/await)
### - ✅ Powerful for iterators and working with large datasets
